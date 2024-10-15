<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Collaterals extends Model
{
    use HasFactory;

    protected $fillable = [
        'collat_code',
        'collat_name',
        'status',
    ];

    protected $table = 'collaterals';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }
}
