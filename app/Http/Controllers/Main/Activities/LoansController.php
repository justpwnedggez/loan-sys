<?php

namespace App\Http\Controllers\Main\Activities;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class LoansController extends Controller
{
    public function createView()
    {
        return Inertia::render('Activities/Loans');
    }
}
