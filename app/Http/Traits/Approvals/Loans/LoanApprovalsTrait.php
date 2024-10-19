<?php

namespace App\Http\Traits\Approvals\Loans;

trait LoanApprovalsTrait
{
    public function loanTransactionsData($request)
    {
        $size = $request->input('size');
        $page = $request->input('page');
        $data = $this->loanTransactionModel()->paginate($size, ['*'], 'page', $page);
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
        $toMembership = $item->toMembership;
        $toLoanMaster = $item->toLoanMaster;
        $toCollateralMaster = $item->toCollateralMaster;

        $item['no'] = $key + 1;

        //Membership Info
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
        $item['principal_amt'] = number_format($item['principal_amt'], 2);
        $item['total_interest'] = number_format($item['total_interest'], 2);
        $item['service_deduction'] = number_format($item['service_deduction'], 2);
        $item['cbu'] = number_format($item['cbu'], 2);
        $item['net_amt'] = number_format($item['net_amt'], 2);

        return $item;
    }
}
