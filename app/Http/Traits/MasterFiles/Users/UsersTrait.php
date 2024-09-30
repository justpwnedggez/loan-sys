<?php

namespace App\Http\Traits\MasterFiles\Users;

use App\Models\User;
use Illuminate\Support\Facades\Crypt;

Trait UsersTrait
{
    public function getUser()
    {
        return \App\Models\User::query();
    }

    public function findById($encryptedId)
    {
        $id = $this->decryptId($encryptedId);

        return \App\Models\User::findOrFail($id);
    }

    public function decryptId($id)
    {
        return Crypt::decryptString($id);
    }
}
