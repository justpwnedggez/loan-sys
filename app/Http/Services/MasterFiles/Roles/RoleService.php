<?php

namespace App\Http\Services\MasterFiles\Roles;

use App\Http\Traits\MasterFiles\Roles\RolesTrait;
use Spatie\Permission\Models\Role;

class RoleService
{
    use RolesTrait;

    public function createRole(array $data)
    {
        return Role::create($data);
    }

    public function applyPermissions(array $data)
    {
        return $this->permissionAssignment($data);
    }
}
