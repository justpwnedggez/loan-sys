<?php

namespace App\Http\Repositories\Approvals\Memberships;

use App\Http\Traits\Approvals\Memberships\MembershipApprovalsTrait;
use App\Http\Traits\ModelsTrait;

class MembershipApprovalsRepository implements MembershipApprovalsInterface
{
    use ModelsTrait, MembershipApprovalsTrait;

    public function retrieveMember($request)
    {
        return $this->membersData($request);
    }
}
