<?php

namespace App\Http\Controllers\Main\Approvals;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Approvals\Loans\LoanApprovalsInterface;
use App\Http\Requests\Approvals\CreateApprovalRequest;
use App\Http\Services\Approvals\LoanApprovals\createApprovalService;

class LoansController extends Controller
{
    protected $loanApprovalRepository;
    protected $loanApprovalService;

    public function __construct(LoanApprovalsInterface $loanApprovalRepository, createApprovalService $loanApprovalService)
    {
        $this->loanApprovalRepository = $loanApprovalRepository;
        $this->loanApprovalService = $loanApprovalService;
    }
    public function listView()
    {
        return Inertia::render('Approvals/LoanApproval');
    }

    public function searchLoanTrans(Request $request)
    {
        return $this->loanApprovalRepository->retrieveLoanTransactions($request);
    }

    public function submitApproval(CreateApprovalRequest $request)
    {
        $approval = $this->loanApprovalService->createApproval($request->validated());

        return response()->json([
            'message' => 'Approval ' . $approval->approve_code . 'created successfully'
        ]);
    }
}
