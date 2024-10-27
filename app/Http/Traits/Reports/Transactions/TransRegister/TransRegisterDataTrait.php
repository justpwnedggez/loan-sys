<?php

namespace App\Http\Traits\Reports\Transactions\TransRegister;

Trait TransRegisterDataTrait
{
    public function getTransRegReportData($request)
    {
        $query = $this->applyFilters($request, $this->loanTransactionModel());

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
        $toMembership = $item->toMembership;
        $toCollateral = $item->toCollateralMaster;
        $toUser = $item->toUsers;

        $item['no'] = $key + 1;
        $item['mem_code'] = $toMembership->mem_code;
        $item['collat_name'] = $toCollateral->collat_name;
        $item['status'] = $item->status == 'Y' ? 'Active' : 'Inactive';
        $item['principal_amt'] = number_format($item->principal_amt, 2);
        $item['total_interest'] = number_format($item->total_interest, 2);
        $item['service_deduction'] = number_format($item->service_deduction, 2);
        $item['cbu'] = number_format($item->cbu, 2);
        $item['net_amt'] = number_format($item->net_amt, 2);
        $item['encoded_by'] = $toUser->first_name . ' '  . $toUser->last_name;
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
        $item['date_modified'] = date('m/d/Y', strtotime($item->updated_at));

        return $item;
    }
}
