<?php

namespace App\Http\Repositories\MasterFiles\Users;

interface UserInterface
{
    public function getUsers($request);
    public function getRoles();
    public function findUser($id);
}
