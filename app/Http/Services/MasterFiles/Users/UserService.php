<?php

namespace App\Http\Services\MasterFiles\Users;

class UserService
{

    public function createUser(array $data)
    {
        return \App\Models\User::create($data);
    }
}
