<?php

namespace App\Http\Controllers\Main\MasterFiles;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\MasterFiles\Loans\LoansInterface;
use App\Http\Requests\Loans\CreateLoanRequest;
use App\Http\Services\MasterFiles\Loans\LoanService;

class LoansController extends Controller
{
    protected $loanService;

    public function __construct(LoanService $loanService)
    {
        $this->loanService = $loanService;
    }

    public function listView(Request $request)
    {

        return Inertia::render('MasterFiles/Loans/ListLoan');
    }

    public function createView(Request $request)
    {
        return Inertia::render('MasterFiles/Loans/CreateLoan');
    }

    public function createSubmit(CreateLoanRequest $request)
    {
        $loan = $this->loanService->createLoan($request->validated());

        return response()->json([
            'message' => 'Loan ' . $loan->name . ' created successfully'
        ]);
    }
}
