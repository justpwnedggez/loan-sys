<?php

namespace App\Http\Traits;


Trait ModelsTrait
{
    //Master Files

    public function membershipModel()
    {
        return \App\Models\MembershipModel::query();
    }

    public function memberParentModel()
    {
        return \App\Models\MembersParentModel::query();
    }

    public function memberBeneficiaryModel()
    {
        return \App\Models\MembersBeneficiaryModel::query();
    }

    public function loansModel()
    {
        return \App\Models\Loans::query();
    }

    public function collateralModel()
    {
        return \App\Models\Collaterals::query();
    }

    public function generalSettingModel()
    {
        return \App\Models\GeneralSettings::query();
    }

    //Transactions

    public function loanTransactionModel()
    {
        return \App\Models\LoanTransactions::query();
    }

    public function loanPaymentsModel()
    {
        return \App\Models\LoanPayment::query();
    }

    //Approvals

    public function approvalsModel()
    {
        return \App\Models\Approvals::query();
    }
}
