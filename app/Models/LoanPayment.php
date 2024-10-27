<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LoanPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'loan_trans_id',
        'mem_id',
        'pay_code',
        'payment_amount',
        'beginning_balance',
        'ending_balance',
        'status',
        'payment_date',
        'encoded_by',
    ];

    protected $table = 'loan_payments';

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
        return $this->hasOne(MembershipModel::class, 'id', 'mem_id');
    }

    public function toUser()
    {
        return $this->hasOne(User::class, 'id',  'encoded_by');
    }
}
