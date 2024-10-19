<?php

namespace App\Http\Repositories\Approvals\Loans;

use App\Http\Traits\Approvals\Loans\LoanApprovalsTrait;
use App\Http\Traits\ModelsTrait;

class LoanApprovalsRepository implements LoanApprovalsInterface
{
    use ModelsTrait, LoanApprovalsTrait;

    public function retrieveLoanTransactions($request)
    {
        return $this->loanTransactionsData($request);
    }
}
