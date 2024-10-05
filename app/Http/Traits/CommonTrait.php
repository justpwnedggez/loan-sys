<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Crypt;

Trait CommonTrait
{
    public function decryptId($id)
    {
        return Crypt::decryptString($id);
    }

    public function encryptId($id)
    {
        return Crypt::encryptString($id);
    }
}
