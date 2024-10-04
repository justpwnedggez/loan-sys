<?php

namespace App\Http\Traits\MasterFiles\Roles;

Trait RolesTrait
{
    public function getAllRoles()
    {
        return \Spatie\Permission\Models\Role::all();
    }
}
