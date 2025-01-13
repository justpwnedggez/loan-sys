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
                'enabled' => $role->hasPermissionTo('access nav-dashboard'),
            ],
            'activities' => [
                'enabled' => $role->hasPermissionTo('access nav-activities'),
                'loan_transaction' => $role->hasPermissionTo('view act_loan_transaction'),
                'loan_amortization' => $role->hasPermissionTo('view act_loan_amortization'),
                'membership' => $role->hasPermissionTo('view act_membership'),
            ],
            'approvals' => [
                'enabled' => $role->hasPermissionTo('access nav-approvals'),
                'loan_approvals' => $role->hasPermissionTo('view loan_approvals'),
                'membership_approvals' => $role->hasPermissionTo('view membership_approvals'),
            ],
            'master_files' => [
                'enabled' => $role->hasPermissionTo('access nav-master-files'),
                'users' => $role->hasPermissionTo('view mf_users'),
                'roles' => $role->hasPermissionTo('view mf_roles'),
                'memberships' => $role->hasPermissionTo('view mf_memberships'),
                'loans' => $role->hasPermissionTo('view mf_loans'),
            ],
            'reports' => [
                'enabled' => $role->hasPermissionTo('access nav-reports'),
                'report_loans' => $role->hasPermissionTo('view report_loans'),
                'report_memberships' => $role->hasPermissionTo('view report_memberships'),
                'report_trans_register' => $role->hasPermissionTo('view report_trans_register'),
                'report_trans_payment' => $role->hasPermissionTo('view report_trans_payment'),
            ],
            'sessions' => [
                'enabled' => $role->hasPermissionTo('access nav-sessions'),
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
            'dashboard' => 'access nav-dashboard',
            'activities' => 'access nav-activities',
            'approvals' => 'access nav-approvals',
            'master_files' => 'access nav-master-files',
            'reports' => 'access nav-reports',
            'sessions' => 'access nav-sessions',
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
