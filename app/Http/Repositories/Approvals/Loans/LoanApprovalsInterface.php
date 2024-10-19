<?php

namespace App\Http\Repositories\Approvals\Loans;

interface LoanApprovalsInterface
{
    public function retrieveLoanTransactions($request);
}
