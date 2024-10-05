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

        // Find the role and include its permissions
        $role = Role::with('permissions')->findOrFail($id);

        // Prepare the permissions data in the desired format
        $permissionsData = [
            'dashboard' => [
                'enabled' => $role->hasPermissionTo('view dashboard'), // Adjust as needed
            ],
            'activities' => [
                'enabled' => $role->hasPermissionTo('view activities'), // Adjust as needed
                'transactions' => $role->hasPermissionTo('view transactions'), // Adjust as needed
                'membership' => $role->hasPermissionTo('view memberships'), // Adjust as needed
            ],
            'approvals' => [
                'enabled' => $role->hasPermissionTo('view approvals'), // Adjust as needed
                'loan_approvals' => $role->hasPermissionTo('view loan_approvals'), // Adjust as needed
                'membership_approvals' => $role->hasPermissionTo('view membership_approvals'), // Adjust as needed
            ],
            'master_files' => [
                'enabled' => $role->hasPermissionTo('view master files'), // Adjust as needed
                'users' => $role->hasPermissionTo('view users'), // Adjust as needed
                'roles' => $role->hasPermissionTo('view roles'), // Adjust as needed
                'memberships' => $role->hasPermissionTo('view memberships'), // Adjust as needed
                'loans' => $role->hasPermissionTo('view loans'), // Adjust as needed
            ],
            'reports' => [
                'enabled' => $role->hasPermissionTo('view reports'), // Adjust as needed
                'loan_portfolio' => $role->hasPermissionTo('view loan_portfolio'), // Adjust as needed
            ],
            'sessions' => [
                'enabled' => $role->hasPermissionTo('view sessions'), // Adjust as needed
                'active_sessions' => $role->hasPermissionTo('view active_sessions'), // Adjust as needed
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
        foreach ($data['permissions'] as $key => $permission) {
            $this->roleId = $data['id'];

            $parentPermName = $this->viewParentPerm($key);
            $this->findOrCreatePermission($parentPermName);

            if ($permission['enabled']) {
                $this->assignmentPermissionToRole($parentPermName);

                $ChildPermNames = $this->viewChildPerm($permission);
                $ChildPermNames->map(function ($childPermName) {
                    $permName = $this->findOrCreatePermission($childPermName);
                    return $this->assignmentPermissionToRole($permName);
                });
            } else {
                $this->revokePermissionFromRole($this->roleId, $parentPermName);
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

    public function viewChildPerm(array $perms)
    {
        return collect(array_keys($perms))
            ->except([0])
            ->map(function ($value) {
                return 'view ' . $value;
            });
    }

    public function findOrCreatePermission(String $permName)
    {
        return Permission::firstOrCreate(['name' => $permName]);
    }

    public function assignmentPermissionToRole($permName)
    {
        $role = Role::findOrFail($this->roleId);

        return $role->givePermissionTo($permName);
    }

    public function revokePermissionFromRole($roleId, $permissionName)
    {
        $role = Role::findOrFail($roleId);

        return $role->revokePermissionTo($permissionName);
    }
}
