<?php

namespace App\Http\Repositories\Reports\Transactions\TransactionRegister;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\Reports\Transactions\TransRegister\TransRegisterDataTrait;

class TransRegisterReportRepository implements TransRegisterReportInterface
{

    use CommonTrait, ModelsTrait, TransRegisterDataTrait;

    public function retrieveData($request)
    {
        return $this->getTransRegReportData($request);
    }
}
