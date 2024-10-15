<?php

namespace App\Http\Traits\Activities\Transactions\Loans;

Trait LoansTrait {

    public function groupViewData()
    {
        return [
            'loans' => $this->loanMasterData(),
            'collat_data' => $this->collateralAssetMasterData(),
            'general_setting' => $this->generalSettingMasterData(),
            'members' => $this->membersData()
        ];
    }

    public function loanMasterData()
    {
        return $this->loansModel()->get();
    }

    public function collateralAssetMasterData()
    {
        return $this->collateralModel()->get();
    }

    public function generalSettingMasterData()
    {
        return $this->generalSettingModel()->first();
    }

    public function membersData()
    {
        return $this->membershipModel()->get();
    }
}
