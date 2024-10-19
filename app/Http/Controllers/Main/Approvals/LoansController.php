<?php

namespace App\Http\Controllers\Main\Approvals;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Approvals\Loans\LoanApprovalsInterface;

class LoansController extends Controller
{
    protected $loanApprovalRepository;

    public function __construct(LoanApprovalsInterface $loanApprovalRepository)
    {
        $this->loanApprovalRepository = $loanApprovalRepository;
    }
    public function listView()
    {
        return Inertia::render('Approvals/LoanApproval');
    }

    public function searchLoanTrans(Request $request)
    {
        return $this->loanApprovalRepository->retrieveLoanTransactions($request);
    }
}
