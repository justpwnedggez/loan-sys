<?php

namespace App\Http\Services\Approvals\LoanApprovals;

use Carbon\Carbon;
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
        $data['start_date'] = Carbon::parse($data['start_date']);
        $data['end_date'] = Carbon::parse($data['end_date']);
        $data['trans_type'] = 'LAP';
        $data['approved_by'] = $data['auth_user'];

        return $data;
    }
}
