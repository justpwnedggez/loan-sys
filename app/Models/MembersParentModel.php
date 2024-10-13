<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MembersParentModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'mem_id',
        'parent_type',
        'first_name',
        'middle_name',
        'last_name',
    ];

    protected $table = 'members_parent';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }
}
