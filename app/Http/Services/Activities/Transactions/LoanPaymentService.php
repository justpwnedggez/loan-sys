<?php

namespace App\Http\Services\Activities\Transactions;

use Carbon\Carbon;
use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use Illuminate\Support\Facades\Auth;

class LoanPaymentService {

    use CommonTrait, ModelsTrait;

    public function createPayment(array $data)
    {
        return $this->loanPaymentsModel()->create($this->formatData($data));
    }

    public function formatData($data)
    {
        $data['payment_amount'] = $this->removeCommaAmount($data['payment_amount']);
        $data['beginning_balance'] = 10000;
        $data['ending_balance'] = 9000;
        $data['payment_date'] = Carbon::now();
        $data['status'] = 'P';
        $data['encoded_by'] = Auth::id();
        return $data;
    }

}
