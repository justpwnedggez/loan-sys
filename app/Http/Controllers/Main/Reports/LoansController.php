<?php

namespace App\Http\Controllers\Main\Reports;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Reports\MasterFiles\Loans\LoansReportInterface;

class LoansController extends Controller
{
    protected $loansReportRepository;

    public function __construct(LoansReportInterface $loansReportRepository)
    {
        $this->loansReportRepository = $loansReportRepository;
    }

    public function repIndex()
    {
        return Inertia::render('Reports/LoanPortfolio');
    }

    public function toFilter(Request $request)
    {
        $loans = $this->loansReportRepository->retrieveData($request);

        return Inertia::render('Reports/Views/MasterFiles/LoansMasterReport', ['loans' => $loans]);
    }
}
