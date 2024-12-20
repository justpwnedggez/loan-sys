<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Loans extends Model
{
    use HasFactory;

    protected $fillable = [
        'loan_code',
        'loan_name',
        'max_loan_amount',
        'loan_period',
        'interest',
        'service_fee',
        'status',
        'loan_purpose'
    ];

    protected $table = 'loans';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }

    public function toLoanTransaction()
    {
        return $this->hasOne(LoanTransactions::class, 'loan_id', 'id');
    }
}
