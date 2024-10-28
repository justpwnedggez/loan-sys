<?php

namespace App\Http\Controllers\Main\Dashboard;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Dashboard\DashboardInterface;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    protected $dashboardRepository;

    public function __construct(DashboardInterface $dashboardRepository)
    {
        $this->dashboardRepository = $dashboardRepository;
    }

    public function dashView(Request $request)
    {
        $dashData = $this->dashboardRepository->retrieveData($request);

        return Inertia::render('Dashboard/index', ['dashData' => $dashData]);
    }
}
