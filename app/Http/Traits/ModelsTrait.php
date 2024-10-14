<?php

namespace App\Http\Traits;


Trait ModelsTrait
{
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
}
