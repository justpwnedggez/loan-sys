<?php

namespace App\Http\Controllers\Main\Reports;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Reports\MasterFiles\Membership\MembershipReportInterface;

class MembershipController extends Controller
{
    protected $membershipReportRepository;

    public function __construct(MembershipReportInterface $membershipReportRepository)
    {
        $this->membershipReportRepository = $membershipReportRepository;
    }

    public function repIndex()
    {
        return Inertia::render('Reports/Membership');
    }

    public function toFilter(Request $request)
    {
        $members = $this->membershipReportRepository->retrieveData($request);

        return Inertia::render('Reports/Views/MasterFiles/MembershipMasterReport', ['members' => $members]);
    }
}
