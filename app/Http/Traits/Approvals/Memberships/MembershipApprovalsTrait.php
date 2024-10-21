<?php

namespace App\Http\Traits\Approvals\Memberships;

trait MembershipApprovalsTrait
{
    public function membersData($request)
    {
        $size = $request->input('size');
        $page = $request->input('page');
        $data = $this->membershipModel()
                     ->with('memberParent', 'memberBeneficiary')
                     ->doesntHave('toApprovals')
                     ->paginate($size, ['*'], 'page', $page);

        $modifiedData = $this->modifyFields($data->getCollection());

        return $data->setCollection($modifiedData);
    }

    public function modifyFields($query)
    {
        return $query->map(function ($item, $key) {
            return collect($this->items($item, $key));
        });
    }

    public function items($item, $key)
    {

        $item['no'] = $key + 1;
        $item['birth_date'] = date('m/d/Y', strtotime($item->birth_date));
        $item['rsbsa'] = $item->rsbsa == 'Y' ? 'Yes' : 'No';
        return $item;
    }
}
