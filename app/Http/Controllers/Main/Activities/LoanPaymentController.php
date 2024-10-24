<?php

namespace App\Http\Controllers\Main\Activities;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Activities\Transactions\LoanAmortization\LoanAmortizationInterface;
use App\Http\Requests\Loans\CreateLoanPaymentRequest;
use App\Http\Services\Activities\Transactions\LoanPaymentService;

class LoanPaymentController extends Controller
{

    protected $loanAmortizationRepository;
    protected $loanPaymentService;

    public function __construct(LoanAmortizationInterface $loanAmortizationRepository, LoanPaymentService $loanPaymentService)
    {
        $this->loanAmortizationRepository = $loanAmortizationRepository;
        $this->loanPaymentService = $loanPaymentService;
    }

    public function listView()
    {
        return Inertia::render('Activities/LoanAmortization');
    }

    public function searchLoanTrans(Request $request)
    {
        return $this->loanAmortizationRepository->retrieveLoanTransactions($request);
    }

    public function submitPayment(CreateLoanPaymentRequest $request)
    {
        $payment = $this->loanPaymentService->createPayment($request->validated());

        return response()->json([
            'message' => 'Payment ' . $payment->pay_code . 'created successfully'
        ]);
    }
}
