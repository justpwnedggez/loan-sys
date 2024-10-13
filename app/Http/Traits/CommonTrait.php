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

    public function removeCommaAmount($amount)
    {
        return str_replace(',', '', $amount);
    }

    function generateMembershipCode($col)
    {
        $length = 8;
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $charactersLength = strlen($characters);
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        if (\App\Models\MembershipModel::where($col, $randomString)->exists()) {
            return $this->generateMembershipCode($length);
        }

        // Return the unique membership code
        return $randomString;
    }
}
