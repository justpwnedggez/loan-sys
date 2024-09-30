<?php

namespace App\Http\Repositories\MasterFiles\Users;

use App\Http\Traits\MasterFiles\Users\UsersTrait;
use App\Models\User;

class UserViewRepository implements UserInterface
{
    use UsersTrait;

    public function getUsers($request)
    {
        $users = $this->getUser()->get();
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
        $item['action'] = route('main.view.user', ['id' => $item->encrypted_id]);

        return $item;
    }

    public function findUser($id)
    {
        return $this->findById($id);
    }
}
