<?php

namespace App\Http\Repositories\MasterFiles\Memberships;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\MasterFiles\Memberships\MembershipTrait;
use App\Http\Traits\ModelsTrait;

class MembershipRepository implements MembershipInterface
{
    use CommonTrait, ModelsTrait, MembershipTrait;

    public function getMembers()
    {
        $members = $this->membershipModel()->get();
        return $this->modifyFields($members);
    }

    public function modifyFields($items)
    {
        return $items->map(function ($item, $key) {
            return collect($this->items($item, $key));
        });
    }

    public function items($item, $key)
    {
        $item['no'] = $key + 1;
        $item['full_name'] = $item['first_name'] . ' ' . $item['last_name'];
        $item['subscription_amount'] = number_format($item['subscription_amount'], 2);
        $item['beneficiaries'] = $item->memberBeneficiary;
        $item['parents'] = $item->memberParent;
        $item['status'] = $item['status'] == 'Y' ? 'Active' : 'Inactive';
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
        $item['date_updated'] = date('m/d/Y', strtotime($item->updated_at));
        $item['action'] = route('main.view.mems', ['id' => $this->encryptId($item->id)]);
        return collect($item)->except('member_beneficiary', 'member_parent');
    }

    public function findMember($id)
    {
        $decryptId = $this->decryptId($id);
        $member = $this->membershipModel()->find($decryptId);
        return $this->modifyFields(collect([$member]));
    }
}
