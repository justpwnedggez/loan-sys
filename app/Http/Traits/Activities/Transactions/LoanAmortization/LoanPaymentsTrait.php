<?php

namespace App\Http\Traits\Activities\Transactions\LoanAmortization;

use Carbon\Carbon;

trait LoanPaymentsTrait
{

    public function approvedloanTransactionsData($request)
    {
        $size = $request->input('size');
        $page = $request->input('page');
        $data = $this->loanTransactionModel()
            ->whereHas('toApprovals')
            ->paginate($size, ['*'], 'page', $page);
        $modifiedData = $this->modifyFieldsHeader($data->getCollection());

        return $data->setCollection($modifiedData);
    }

    public function modifyFieldsHeader($query)
    {
        return $query->map(function ($item, $key) {
            return collect($this->itemHeaders($item, $key));
        });
    }

    public function modifyFieldsDetails($query)
    {
        return $query->map(function ($item, $key) {
            return collect($this->itemDetails($item, $key));
        });
    }

    public function itemHeaders($item, $key)
    {
        $toMembership = $item->toMembership;
        $toLoanMaster = $item->toLoanMaster;
        $toCollateralMaster = $item->toCollateralMaster;
        $toLoanPayments = $item->toLoanPayments;
        $toApprovals = $item->toApprovals;

        // For Remaining Balance and Next Payment Due
        $startDate = $toApprovals->start_date;
        $paymentCount = $toLoanPayments->count();

        //General Info
        $item['no'] = $key + 1;

        //Membership Info
        $item['mem_id'] = $toMembership->id;
        $item['mem_code'] = $toMembership->mem_code;
        $item['mem_name'] = $toMembership->first_name . ' ' . $toMembership->last_name;
        $item['birth_date'] = date('m/d/Y', strtotime($toMembership->birth_date));
        $item['age'] = $toMembership->age;
        $item['phone_number'] = $toMembership->phone_number;
        $item['occupation'] = $toMembership->occupation;
        $item['gross_annual_income'] = $toMembership->gross_annual_income;
        $item['cooperative_member_name'] = $toMembership->cooperative_member_name;
        $item['rsbsa'] = $toMembership->rsbsa == 'Y' ? 'Yes' : 'No';
        $item['farm_area'] = $toMembership->farm_area;
        $item['farm_location'] = $toMembership->farm_location;

        //Loan Trans Info
        $item['collat_asset_type'] = $toCollateralMaster->collat_name;
        $item['loan_name'] = $toLoanMaster->loan_name;
        $item['max_loan_amount'] = $toLoanMaster->max_loan_amount;
        $item['loan_period'] = $toLoanMaster->loan_period;
        $item['interest'] = $toLoanMaster->interest;
        $item['loan_purpose'] = $toLoanMaster->loan_purpose;
        $item['service_fee'] = $toLoanMaster->service_fee;
        $item['status'] = $item['status'] == 'Y' ? 'Active' : 'Inactive';
        $item['principal_amt'] = number_format((int) $item->principal_amt, 2);
        $item['total_interest'] = number_format((int) $item->total_interest, 2);
        $item['service_deduction'] = number_format((int) $item->service_deduction, 2);
        $item['cbu'] = number_format($item['cbu'], 2);
        $item['net_amt'] = number_format($item['net_amt'], 2);

        //Loan Payments Header Info
        $item['remaining_amt'] = number_format($this->calculateRemainingAmt($item['principal_amt'], $toLoanPayments), 2);
        $item['next_payment_due'] = date('m/d/Y', strtotime($this->nextPaymentDue($startDate, $paymentCount, $toLoanPayments)));

        //Loan Payments Details
        $item['loan_payments'] = $this->modifyFieldsDetails($toLoanPayments);

        return $item;
    }

    public function itemDetails($item, $key)
    {
        $item['no'] = $key + 1;
        $item['payment_date'] = date('m/d/Y', strtotime($item->created_at));
        $item['principal_amt'] = number_format($item->payment_amount, 2);
        $item['beginning_balance'] = number_format($item->beginning_balance, 2);
        $item['ending_balance'] = number_format($item->ending_balance, 2);

        return $item;
    }

    public function calculateRemainingAmt($principalAmt, $items)
    {
        return (int) $this->removeCommaAmount($principalAmt) - (int) $this->removeCommaAmount($this->sumPayments($items));
    }

    public function sumPayments($items)
    {
        if ($items->isEmpty()) {
            return 0;
        }

        return $items->sum('payment_amount');
    }

    public function nextPaymentDue($startDate, $paymentCount, $items)
    {
        if ($items->isEmpty()) {
            return Carbon::parse($startDate)->addMonths(1);
        }

        $startDate = Carbon::parse($startDate);

        return $startDate->addMonths($paymentCount + 1);
    }
}
