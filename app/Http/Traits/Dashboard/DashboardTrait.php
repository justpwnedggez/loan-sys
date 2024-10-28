<?php

namespace App\Http\Traits\Dashboard;

trait DashboardTrait
{

    public function getDashboardData($request)
    {
        $query = $this->applyFilters($request, $this->loansModel());

        return $this->modifyFields($query->get());
    }

    public function applyFilters($request, $query)
    {
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
        $toLoanTransaction = $item->toLoanTransaction;

        // Check if toLoanTransaction exists
        if ($toLoanTransaction) {
            $toLoanTransPayments = $toLoanTransaction->toLoanPayments; // This should be a collection

            // Initialize totalPayments to 0 if no payments exist
            $totalPayments = $toLoanTransPayments ? $toLoanTransPayments->sum('payment_amount') : 0;

            $principalAmount = $toLoanTransaction->principal_amt;

            // Calculate outstanding balance
            $outstandingBalance = $principalAmount - $totalPayments;

            $item['no'] = $key + 1;
            $item['total_amount'] = $totalPayments; // Total payment amount
            $item['outstanding_balance'] = $outstandingBalance; // Outstanding balance
            $item['start_date'] = date('m/d/Y', strtotime($toLoanTransaction->start_date));
            $item['status'] = $item->status == 'Y' ? 'Active' : 'Inactive';
            $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
            $item['date_modified'] = date('m/d/Y', strtotime($item->updated_at));
        } else {
            // If there's no loan transaction, set default values
            $item['no'] = $key + 1;
            $item['total_amount'] = 0;
            $item['outstanding_balance'] = 0;
            $item['status'] = $item->status == 'Y' ? 'Active' : 'Inactive';
            $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
            $item['date_modified'] = date('m/d/Y', strtotime($item->updated_at));
        }

        return $item;
    }

    public function getTotalPrincipalAmt($items)
    {
        return $items->sum(function ($item) {
            return $item->toLoanTransaction ? $item->toLoanTransaction->principal_amt : 0; // Return 0 if no transaction
        });
    }

    public function getTotalOutstandingBalance($items)
    {
        return $items->sum(function ($item) {
            $totalPayments = $item->toLoanTransaction && $item->toLoanTransaction->toLoanPayments
            ? $item->toLoanTransaction->toLoanPayments->sum('payment_amount')
            : 0; // Return 0 if no payments

            $principalAmount = $item->toLoanTransaction ? $item->toLoanTransaction->principal_amt : 0;

            return $principalAmount - $totalPayments; // Calculate outstanding balance
        });
    }

}
