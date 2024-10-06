<?php

namespace App\Http\Traits\MasterFiles\Roles;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

trait RolesTrait
{
    protected $roleId;

    public function getAllRoles()
    {
        return \Spatie\Permission\Models\Role::all();
    }

    public function findById($encryptedId)
    {
        $id = $this->decryptId($encryptedId);
        $role = Role::with('permissions')->findOrFail($id);

        $permissionsData = [
            'dashboard' => [
                'enabled' => $role->hasPermissionTo('view dashboard'),
            ],
            'activities' => [
                'enabled' => $role->hasPermissionTo('view activities'),
                'transactions' => $role->hasPermissionTo('view transactions'),
                'membership' => $role->hasPermissionTo('view memberships'),
            ],
            'approvals' => [
                'enabled' => $role->hasPermissionTo('view approvals'),
                'loan_approvals' => $role->hasPermissionTo('view loan_approvals'),
                'membership_approvals' => $role->hasPermissionTo('view membership_approvals'),
            ],
            'master_files' => [
                'enabled' => $role->hasPermissionTo('view master files'),
                'users' => $role->hasPermissionTo('view users'),
                'roles' => $role->hasPermissionTo('view roles'),
                'memberships' => $role->hasPermissionTo('view memberships'),
                'loans' => $role->hasPermissionTo('view loans'),
            ],
            'reports' => [
                'enabled' => $role->hasPermissionTo('view reports'),
                'loan_portfolio' => $role->hasPermissionTo('view loan_portfolio'),
            ],
            'sessions' => [
                'enabled' => $role->hasPermissionTo('view sessions'),
                'active_sessions' => $role->hasPermissionTo('view active_sessions'),
            ],
        ];

        return response()->json([
            'id' => $role->id,
            'role_name' => $role->name,
            'permissions' => $permissionsData,
        ]);
    }

    public function permissionAssignment(array $data)
    {
        $roleId = $data['id'];

        foreach ($data['permissions'] as $parentPermission => $permissionDetails) {
            $parentPermName = $this->viewParentPerm($parentPermission);
            $this->processParentPermission($roleId, $parentPermName, $permissionDetails);
        }
    }

    private function processParentPermission($roleId, $parentPermName, $permissionDetails)
    {
        // Assign or revoke the parent permission based on its enabled status
        if ($permissionDetails['enabled']) {
            $this->assignPermission($roleId, $parentPermName);
        } else {
            $this->revokePermission($roleId, $parentPermName);
        }

        // Process child permissions
        $this->processChildPermissions($roleId, $permissionDetails);
    }

    private function processChildPermissions($roleId, $permissionDetails)
    {
        foreach ($permissionDetails as $childPermission => $isEnabled) {
            if ($childPermission === 'enabled') {
                continue; // Skip the 'enabled' property
            }

            $childPermName = $this->viewChildPerm($childPermission);

            // If the parent is disabled, revoke all child permissions immediately
            if (!$permissionDetails['enabled']) {
                $this->revokePermission($roleId, $childPermName);
            } else {
                // Assign or revoke the child permission based on its enabled status
                $isEnabled ? $this->assignPermission($roleId, $childPermName) : $this->revokePermission($roleId, $childPermName);
            }
        }
    }

    public function viewParentPerm(String $str)
    {
        return [
            'dashboard' => 'view dashboard',
            'activities' => 'view activities',
            'approvals' => 'view approvals',
            'master_files' => 'view master files',
            'reports' => 'view reports',
            'sessions' => 'view sessions',
        ][$str];
    }

    public function viewChildPerm(String $perms)
    {
        return 'view ' . $perms;
    }

    public function findOrCreatePermission(String $permName)
    {
        return Permission::firstOrCreate(['name' => $permName]);
    }

    private function assignPermission($roleId, $permissionName)
    {
        $this->findOrCreatePermission($permissionName);
        $this->assignmentPermissionToRole($roleId, $permissionName);
    }

    private function assignmentPermissionToRole($roleId, $permName)
    {
        $role = Role::findOrFail($roleId);

        return $role->givePermissionTo($permName);
    }

    private function revokePermission($roleId, $permissionName)
    {
        $role = Role::findOrFail($roleId);
        return $role->revokePermissionTo($permissionName);
    }
}
