<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MembersBeneficiaryModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'mem_id',
        'name',
        'relationship'
    ];

    protected $table = 'members_beneficiary';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }
}
