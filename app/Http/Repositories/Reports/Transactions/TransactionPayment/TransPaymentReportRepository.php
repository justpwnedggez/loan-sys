<?php

namespace App\Http\Repositories\Reports\Transactions\TransactionPayment;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\Reports\Transactions\TransPayment\TransPaymentDataTrait;

class TransPaymentReportRepository implements TransPaymentReportInterface
{

    use CommonTrait, ModelsTrait, TransPaymentDataTrait;

    public function retrieveData($request)
    {
        return $this->getTransPayReportData($request);
    }
}
