<?php

namespace App\Http\Repositories\MasterFiles\Roles;

interface RoleInterface
{
    public function getRoles($request);
    public function findRole($id);
}
