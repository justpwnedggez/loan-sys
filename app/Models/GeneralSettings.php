<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GeneralSettings extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_code',
        'company_name',
        'company_short_name',
        'address_1',
        'address_2',
        'address_3',
        'zip_code',
        'tin_no',
        'phone_number',
    ];

    protected $table = 'general_settings';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }
}
