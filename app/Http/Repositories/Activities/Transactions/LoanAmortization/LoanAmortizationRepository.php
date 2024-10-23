<?php

namespace App\Http\Repositories\Activities\Transactions\LoanAmortization;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\Activities\Transactions\LoanAmortization\LoanPaymentsTrait;

class LoanAmortizationRepository implements LoanAmortizationInterface
{
    use CommonTrait, ModelsTrait, LoanPaymentsTrait;

    public function retrieveLoanTransactions($request)
    {
        return $this->approvedloanTransactionsData($request);
    }
}
