<?php

namespace App\Http\Controllers\Main\Activities;

use App\Http\Controllers\Controller;

class TransactionsController extends Controller
{
    public function createView()
    {
        return \Inertia\Inertia::render('Activities/Transactions');
    }
}
