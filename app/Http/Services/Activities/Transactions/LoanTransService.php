<?php

namespace App\Http\Services\Activities\Transactions;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\Activities\Transactions\Loans\LoansTrait;

class LoanTransService {

    use CommonTrait, ModelsTrait;

    public function createLoan(array $data)
    {
        return $this->loanTransactionModel()->create($data);
    }

}
