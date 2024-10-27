<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Approvals extends Model
{
    use HasFactory;

    protected $fillable = [
        'loan_trans_id',
        'mem_trans_id',
        'approve_code',
        'trans_type',
        'approve_desc',
        'status',
        'approved_by',
        'start_date',
        'end_date',
    ];

    protected $table = 'approvals';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }

    public function toLoanTransaction()
    {
        return $this->hasOne(LoanTransactions::class, 'id', 'loan_trans_id');
    }

    public function toMembership()
    {
        return $this->hasOne(MembershipModel::class, 'id', 'mem_trans_id');
    }
}
