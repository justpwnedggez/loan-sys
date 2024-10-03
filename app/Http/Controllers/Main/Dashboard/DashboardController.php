<?php

namespace App\Http\Controllers\Main\Dashboard;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function dashView()
    {
        return Inertia::render('Dashboard/index');
    }
}
