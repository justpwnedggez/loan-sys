<?php

namespace App\Http\Controllers\Main\Approvals;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Approvals\Memberships\MembershipApprovalsInterface;
use App\Http\Requests\Approvals\CreateMemberApprovalRequest;
use App\Http\Services\Approvals\MembershipApprovals\CreateApprovalService;

class MembershipsController extends Controller
{
    protected $membershipApprovalRepository;
    protected $membershipApprovalService;

    public function __construct(MembershipApprovalsInterface $membershipApprovalRepository, CreateApprovalService $membershipApprovalService)
    {
        $this->membershipApprovalRepository = $membershipApprovalRepository;
        $this->membershipApprovalService = $membershipApprovalService;
    }

    public function listView()
    {
        return Inertia::render('Approvals/MemsApproval');
    }

    public function searchMember(Request $request)
    {
        return $this->membershipApprovalRepository->retrieveMember($request);
    }

    public function submitApproval(CreateMemberApprovalRequest $request)
    {
        $approval = $this->membershipApprovalService->createApproval($request->validated());

        return response()->json([
            'message' => 'Approval ' . $approval->approve_code . 'created successfully'
        ]);
    }
}
