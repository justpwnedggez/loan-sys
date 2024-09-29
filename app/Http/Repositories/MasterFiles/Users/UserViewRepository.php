<?php

namespace App\Http\Repositories\MasterFiles\Users;

use App\Models\User;

class UserViewRepository implements UserInterface
{
    public function getUsers($request)
    {
        $users = User::get();
        return $this->modifyFields($users);
    }

    public function modifyFields($query)
    {
        return $query->map(function ($item, $key) {
            return collect($this->items($item, $key));
        });
    }

    public function items($item, $key)
    {
        $item['no'] = $key + 1;
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));

        return $item;
    }
}
