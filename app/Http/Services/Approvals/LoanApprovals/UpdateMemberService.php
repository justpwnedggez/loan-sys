<?php

namespace App\Http\Services\Approvals\LoanApprovals;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;

class UpdateMemberService
{
    use ModelsTrait, CommonTrait;

    public function updateMember(array $data)
    {
        $memberId = $data['mem_id'];

        return $this->membershipModel()
            ->where('id', $memberId)
            ->update($this->formatData($data, $this->selectMemberCbu($memberId)));
    }

    public function formatData($data, $currentAmount)
    {
        $allowedKeys = [
            'subscription_amount'
        ];

        $filteredData = array_intersect_key($data, array_flip($allowedKeys));

        $filteredData['subscription_amount'] = $currentAmount + $this->removeCommaAmount($filteredData['subscription_amount']);

        return $filteredData;
    }

    public function selectMemberCbu($id)
    {
        return $this->membershipModel()
            ->where('id', $id)
            ->value('subscription_amount');
    }

}
