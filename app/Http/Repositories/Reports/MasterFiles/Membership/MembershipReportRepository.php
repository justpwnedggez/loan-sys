<?php

namespace App\Http\Repositories\Reports\MasterFiles\Membership;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\Reports\MasterFiles\Membership\MembershipDataTrait;

class MembershipReportRepository implements MembershipReportInterface
{

    use CommonTrait, ModelsTrait, MembershipDataTrait;

    public function retrieveData($request)
    {
        return $this->getMembershipReportData($request);
    }
}
