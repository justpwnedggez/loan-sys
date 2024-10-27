<?php

namespace App\Http\Traits\Reports\Transactions\TransPayment;

Trait TransPaymentDataTrait
{
    public function getTransPayReportData($request)
    {
        $query = $this->applyFilters($request, $this->loanPaymentsModel());

        return $this->modifyFields($query->get());
    }

    public function applyFilters($request, $query)
    {
        if (request()->has('date_from')) {
            $query->where('payment_date', '>=', request()->input('date_from'));
        }

        if (request()->has('date_to')) {
            $query->where('payment_date', '<=', request()->input('date_to'));
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
        $toUser = $item->toUser;

        $item['no'] = $key + 1;
        $item['mem_code'] = $toMembership->mem_code;
        $item['payee_name'] = $toMembership->first_name . ' ' . $toMembership->last_name;
        $item['payment_amount'] = number_format($item->payment_amount, 2);
        $item['beginning_balance'] = number_format($item->beginning_balance, 2);
        $item['ending_balance'] = number_format($item->ending_balance, 2);
        $item['status'] = $item->status == 'P' ? 'Paid' : 'Pending';
        $item['encoded_by'] = $toUser->first_name . ' '  . $toUser->last_name;
        $item['payment_date'] = date('m/d/Y', strtotime($item->payment_date));
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
        $item['date_modified'] = date('m/d/Y', strtotime($item->updated_at));

        return $item;
    }
}
