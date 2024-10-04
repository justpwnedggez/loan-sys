<?php

namespace App\Http\Services\MasterFiles\Roles;

use Spatie\Permission\Models\Role;

class RoleService
{

    public function createRole(array $data)
    {
        return Role::create($data);
    }
}
