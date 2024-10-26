<?php

namespace App\Http\Repositories\Reports\MasterFiles\Loans;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\Reports\MasterFiles\Loans\LoansDataTrait;

class LoansReportRepository implements LoansReportInterface
{

    use CommonTrait, ModelsTrait, LoansDataTrait;

    public function retrieveData($request)
    {
        return $this->getLoanReportData($request);
    }
}
