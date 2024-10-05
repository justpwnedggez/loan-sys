<?php

namespace App\Http\Services\MasterFiles\Users;

use App\Http\Traits\CommonTrait;

class UserService
{
    use CommonTrait;

    public function createUser(array $data)
    {
        return \App\Models\User::create($data);
    }

    public function updateUser(array $data)
    {
        return \App\Models\User::where('id', $data['id'])->update($data);
    }
}
