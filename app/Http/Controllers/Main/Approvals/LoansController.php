<?php

namespace App\Http\Controllers\Main\Approvals;

use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Approvals\CreateLoanApprovalRequest;
use App\Http\Repositories\Approvals\Loans\LoanApprovalsInterface;
use App\Http\Services\Approvals\LoanApprovals\UpdateMemberService;
use App\Http\Services\Approvals\LoanApprovals\CreateApprovalService;

class LoansController extends Controller
{
    protected $loanApprovalRepository;
    protected $loanApprovalService;
    protected $loanApprovedUpdateMemberService;

    public function __construct(
        LoanApprovalsInterface $loanApprovalRepository,
        CreateApprovalService $loanApprovalService,
        UpdateMemberService $loanApprovedUpdateMemberService
    ) {
        $this->loanApprovalRepository = $loanApprovalRepository;
        $this->loanApprovalService = $loanApprovalService;
        $this->loanApprovedUpdateMemberService = $loanApprovedUpdateMemberService;
    }

    public function listView()
    {
        return Inertia::render('Approvals/LoanApproval');
    }

    public function searchLoanTrans(Request $request)
    {
        return $this->loanApprovalRepository->retrieveLoanTransactions($request);
    }

    public function submitApproval(CreateLoanApprovalRequest $request)
    {
        try {

            DB::beginTransaction();

            $approval = $this->loanApprovalService->createApproval($request->validated());

            $this->loanApprovedUpdateMemberService->updateMember($request->only([
                'mem_id',
                'loan_trans_id',
                'subscription_amount'
            ]));

            DB::commit();

            return response()->json([
                'message' => 'Approval ' . $approval->approve_code . ' created successfully',
            ], 200);

        } catch (\Illuminate\Database\QueryException $err) {

            Log::error('SQL Error: ' . $err->getMessage(), ['exception' => $err]);

            DB::rollBack();

            return response()->json(['message' => 'A database error occurred. Please try again later.'], 500);
        }
    }

}
