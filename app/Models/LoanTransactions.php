<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LoanTransactions extends Model
{
    use HasFactory;

    protected $fillable = [
        'mem_id',
        'loan_id',
        'loan_collat_id',
        'approval_id',
        'trans_no',
        'loan_collat_desc',
        'status',
        'principal_amt',
        'total_interest',
        'service_deduction',
        'net_amt'
    ];

    protected $table = 'loan_transactions';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }
}
