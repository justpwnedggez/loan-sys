<?php

namespace App\Http\Controllers\Main\Activities;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class LoanRenewalController extends Controller
{
    public function createView()
    {
        return Inertia::render('Activities/LoanRenewal');
    }
}
