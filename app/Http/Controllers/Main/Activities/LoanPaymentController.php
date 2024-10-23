<?php

namespace App\Http\Controllers\Main\Activities;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Activities\Transactions\LoanAmortization\LoanAmortizationInterface;

class LoanPaymentController extends Controller
{

    protected $loanAmortizationRepository;
    protected $loanApprovalService;

    public function __construct(LoanAmortizationInterface $loanAmortizationRepository)
    {
        $this->loanAmortizationRepository = $loanAmortizationRepository;
    }

    public function listView()
    {
        return Inertia::render('Activities/LoanAmortization');
    }

    public function searchLoanTrans(Request $request)
    {
        return $this->loanAmortizationRepository->retrieveLoanTransactions($request);
    }

    // public function submitApproval(CreateLoanApprovalRequest $request)
    // {
    //     $approval = $this->loanApprovalService->createApproval($request->validated());

    //     return response()->json([
    //         'message' => 'Approval ' . $approval->approve_code . 'created successfully'
    //     ]);
    // }
}
