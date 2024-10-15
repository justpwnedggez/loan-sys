<?php

namespace App\Http\Repositories\Activities\Transactions\Loans;

use App\Http\Traits\Activities\Transactions\Loans\LoansTrait;
use App\Http\Traits\ModelsTrait;

class LoansRepository implements LoansInterface
{
    use ModelsTrait, LoansTrait;

    public function retrieveData()
    {
        return $this->groupViewData();
    }
}
