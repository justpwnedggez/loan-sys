<?php

namespace App\Http\Controllers\Main\Approvals;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class LoansController extends Controller
{
    public function listView()
    {
        return Inertia::render('Approvals/LoanApproval');
    }
}
