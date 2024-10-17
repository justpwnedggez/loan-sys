<?php

namespace App\Http\Repositories\MasterFiles\Loans;

interface LoansInterface
{
    public function getLoans($request);
    public function findLoan($id);
}
