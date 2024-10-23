<?php

namespace App\Http\Services\Approvals\MembershipApprovals;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;

class CreateApprovalService
{
    use ModelsTrait, CommonTrait;

    public function createApproval(array $data)
    {
        return $this->approvalsModel()->create($this->formatData($data));
    }
    public function formatData($data)
    {
        $data['trans_type'] = 'MAP';
        $data['approved_by'] = $data['auth_user'];

        return $data;
    }
}
