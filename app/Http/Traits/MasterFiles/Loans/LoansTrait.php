<?php

namespace App\Http\Traits\MasterFiles\Loans;

trait LoansTrait {

    public function formatData(array $data)
    {
        $data['max_loan_amount'] = $this->removeCommaAmount($data['max_loan_amount']);

        return $data;
    }
}
