<?php

namespace App\Http\Controllers\Main\Activities;

use App\Http\Controllers\Controller;
use App\Http\Repositories\Activities\Transactions\Loans\LoansInterface;
use App\Http\Requests\Loans\CreateLoanTransRequest;
use App\Http\Services\Activities\Transactions\LoanTransService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoansController extends Controller
{
    protected $loanRepository;
    protected $loanTransService;

    public function __construct(LoansInterface $loanRepository, LoanTransService $loanTransService)
    {
        $this->loanRepository = $loanRepository;
        $this->loanTransService = $loanTransService;
    }

    public function createView()
    {
        $data = $this->loanRepository->retrieveData();

        return Inertia::render('Activities/Loans', ['data' => $data]);
    }

    public function searchMember(Request $request)
    {
        return $this->loanRepository->retrieveMemberData($request);
    }

    public function createLoanTrans(CreateLoanTransRequest $request)
    {
        $loanTrans = $this->loanTransService->createLoan($request->validated());

        return response()->json([
            'message' => 'Loan ' . $loanTrans->trans_no . ' created successfully'
        ]);
    }
}
