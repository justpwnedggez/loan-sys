<?php

namespace App\Http\Repositories\Dashboard;

use App\Http\Traits\Dashboard\DashboardTrait;
use App\Http\Traits\ModelsTrait;

class DashboardRepository implements DashboardInterface
{
    use ModelsTrait, DashboardTrait;

    public function retrieveData($request)
    {
        return $this->getDashboardData($request);
    }
}
