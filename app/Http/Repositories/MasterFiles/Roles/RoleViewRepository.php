<?php

namespace App\Http\Repositories\MasterFiles\Roles;

use App\Http\Traits\MasterFiles\Roles\RolesTrait;

class RoleViewRepository implements RoleInterface
{
    use RolesTrait;

    public function getRoles($request)
    {
        $roles = $this->getAllRoles();
        return $this->modifyFields($roles);
    }

    public function modifyFields($items)
    {
        return $items->map(function ($item, $key) {
            return collect($this->items($item, $key));
        });
    }

    public function items($item, $key)
    {
        $item['no'] = $key + 1;
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
        $item['date_updated'] = date('m/d/Y', strtotime($item->updated_at));

        return $item;
    }
}
