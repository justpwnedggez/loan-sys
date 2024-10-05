<?php

namespace App\Http\Traits\MasterFiles\Users;

use App\Http\Traits\CommonTrait;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;

Trait UsersTrait
{
    use CommonTrait;

    public function getUser()
    {
        return \App\Models\User::query();
    }

    public function findById($encryptedId)
    {
        $id = $this->decryptId($encryptedId);

        return \App\Models\User::findOrFail($id);
    }
}
