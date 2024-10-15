<?php

namespace App\Http\Controllers\Main\Activities;

use App\Http\Controllers\Controller;
use App\Http\Repositories\Activities\Transactions\Loans\LoansInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoansController extends Controller
{
    protected $loanRepository;

    public function __construct(LoansInterface $loanRepository)
    {
        $this->loanRepository = $loanRepository;
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
}
