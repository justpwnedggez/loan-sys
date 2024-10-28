<?php

namespace App\Http\Controllers\Main\Activities;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Activities\Memberships\MembershipsInterface;
use App\Http\Requests\Memberships\CreateMembershipRequest;
use App\Http\Services\Activities\Memberships\MembershipService;

class MembershipsController extends Controller
{
    protected $membershipService;
    protected $membershipRepository;

    public function __construct(MembershipService $membershipService, MembershipsInterface $membershipRepository)
    {
        $this->membershipService = $membershipService;
        $this->membershipRepository = $membershipRepository;
    }
    public function createView()
    {
        $generalSetting = $this->membershipRepository->retrieveData();
        return Inertia::render('Activities/Memberships', ['genSett' => $generalSetting]);
    }

    public function createSubmit(CreateMembershipRequest $request)
    {
        $member = $this->membershipService->createMembership($request->validated());

        return response()->json([
            'message' => 'Member ' . $member->first_name . ' created successfully'
        ]);
    }


}
