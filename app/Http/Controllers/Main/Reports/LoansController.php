<?php

namespace App\Http\Controllers\Main\Reports;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class LoansController extends Controller
{
    public function repView()
    {
        return Inertia::render('Reports/LoanPortfolio');
    }
}
