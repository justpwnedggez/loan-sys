<?php

namespace App\Http\Repositories\Activities\Memberships;

use App\Http\Traits\ModelsTrait;

class MembershipsRepository implements MembershipsInterface
{
    use ModelsTrait;

    public function retrieveData()
    {
        return $this->generalSettingModel()->first();
    }
}
