<?php

namespace App\Http\Controllers\Main\Activities;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Requests\Memberships\CreateMembershipRequest;
use App\Http\Services\Activities\Memberships\MembershipService;

class MembershipsController extends Controller
{
    protected $membershipService;

    public function __construct(MembershipService $membershipService)
    {
        $this->membershipService = $membershipService;
    }
    public function createView()
    {
        return Inertia::render('Activities/Memberships');
    }

    public function createSubmit(CreateMembershipRequest $request)
    {
        $member = $this->membershipService->createMembership($request->validated());

        return response()->json([
            'message' => 'Member ' . $member->first_name . ' created successfully'
        ]);
    }


}
