<?php

namespace App\Http\Repositories\MasterFiles\Users;

interface UserInterface
{
    public function getUsers($request);
    public function findUser($id);
}
