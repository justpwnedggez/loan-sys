<?php

namespace App\Http\Repositories\MasterFiles\Users;

use App\Models\User;

class UserRepository implements UserInterface
{
    public function getUsers($request)
    {
        return User::get();
    }
}
