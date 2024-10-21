<?php

namespace App\Http\Services\Approvals\LoanApprovals;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;

class createApprovalService
{

    use ModelsTrait, CommonTrait;

    public function createApproval(array $data)
    {
        return $this->approvalsModel()->create($this->formatData($data));
    }
    public function formatData($data)
    {
        $data['trans_type'] = 'LAP';
        $data['approved_by'] = $data['auth_user'];

        return $data;
    }
}
