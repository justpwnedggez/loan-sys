<?php

namespace App\Http\Controllers\Main\MasterFiles;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\MasterFiles\Loans\LoansInterface;
use App\Http\Requests\Loans\CreateLoanRequest;
use App\Http\Requests\Loans\UpdateLoanRequest;
use App\Http\Services\MasterFiles\Loans\LoanService;

class LoansController extends Controller
{
    protected $loanService;
    protected $loanRepository;

    public function __construct(LoansInterface $loanRepository,LoanService $loanService)
    {
        $this->loanService = $loanService;
        $this->loanRepository = $loanRepository;
    }

    public function listView(Request $request)
    {
        $loans = $this->loanRepository->getLoans($request);

        return Inertia::render('MasterFiles/Loans/ListLoan', ['loans' => $loans]);
    }

    public function createView()
    {
        return Inertia::render('MasterFiles/Loans/CreateLoan');
    }

    public function updateView($id)
    {
        $loan = $this->loanRepository->findLoan($id);
        return Inertia::render('MasterFiles/Loans/ViewLoan', ['loan' => $loan]);
    }

    public function createSubmit(CreateLoanRequest $request)
    {
        $loan = $this->loanService->createLoan($request->validated());

        return response()->json([
            'message' => 'Loan ' . $loan->name . ' created successfully'
        ]);
    }

    public function updateSubmit(UpdateLoanRequest $request)
    {
        return $this->loanService->updateLoan($request->validated());
    }
}
