<?php

namespace App\Http\Repositories\MasterFiles\Loans;

interface LoansInterface
{
    public function getUsers($request);
    public function findUser($id);
}
