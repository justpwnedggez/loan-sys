<?php

namespace App\Http\Services\Activities\Transactions;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class LoanPaymentService
{

    use CommonTrait, ModelsTrait;

    public function createPayment(array $data)
    {
        return $this->loanPaymentsModel()->create($this->formatData($data));
    }

    public function formatData($data)
    {
        $data['payment_amount'] = $this->removeCommaAmount($data['payment_amount']);

        $balances = $this->calculateBalances($data['payment_amount'], $this->removeCommaAmount($data['previous_balance']));
        $data['beginning_balance'] = $balances['beginning_balance'];
        $data['ending_balance'] = $balances['ending_balance'];

        $data['payment_date'] = Carbon::now();
        $data['status'] = 'P';
        $data['encoded_by'] = Auth::id();

        return $data;
    }

    public function calculateBalances($paymentAmount, $previousBalance)
    {
        $beginningBalance = $previousBalance;
        $endingBalance = $beginningBalance - $paymentAmount;
        return [
            'beginning_balance' => $beginningBalance,
            'ending_balance' => $endingBalance,
        ];
    }

}
