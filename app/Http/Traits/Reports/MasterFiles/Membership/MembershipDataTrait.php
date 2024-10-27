<?php

namespace App\Http\Traits\Reports\MasterFiles\Membership;

Trait MembershipDataTrait
{
    public function getMembershipReportData($request)
    {
        $query = $this->applyFilters($request, $this->membershipModel());

        return $this->modifyFields($query->get());
    }

    public function applyFilters($request, $query)
    {
        if (request()->has('date_from')) {
            $query->where('created_at', '>=', request()->input('date_from'));
        }

        if (request()->has('date_to')) {
            $query->where('created_at', '<=', request()->input('date_to'));
        }

        if($request->has('status') && $request->input('status') !== null) {
            $query->where('status', $request->input('status'));
        }

        return $query;
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
        $item['name'] = $item->first_name . ' ' . $item->last_name;
        $item['subscription_amount'] = number_format($item->subscription_amount, 2);
        $item['civil_status'] = ['S' => 'Single', 'M' => 'Married', 'D' => 'Divorced'][$item->civil_status];
        $item['status'] = $item->status == 'Y' ? 'Active' : 'Inactive';
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
        $item['date_modified'] = date('m/d/Y', strtotime($item->updated_at));

        return $item;
    }
}
