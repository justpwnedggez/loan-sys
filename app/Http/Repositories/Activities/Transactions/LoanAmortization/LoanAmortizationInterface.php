<?php

namespace App\Http\Repositories\Activities\Transactions\LoanAmortization;

interface LoanAmortizationInterface
{
    public function retrieveLoanTransactions($request);
}
