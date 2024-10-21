<?php

namespace App\Models;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MembershipModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'mem_code',
        'first_name',
        'middle_name',
        'last_name',
        'subscription_amount',
        'subscription_years',
        'status',
        'present_address',
        'permanent_address',
        'birth_date',
        'age',
        'birth_place',
        'religion',
        'tribe',
        'civil_status',
        'phone_number',
        'tin_no',
        'highest_educ_attainment',
        'occupation',
        'gross_annual_income',
        'cooperative_member_name',
        'rsbsa',
        'farm_area',
        'farm_location',
        'reason_for_joining'
    ];

    protected $table = 'membership';

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }

    public function memberParent(): HasMany
    {
        return $this->hasMany(MembersParentModel::class, 'mem_id', 'id');
    }

    public function memberBeneficiary(): HasMany
    {
        return $this->hasMany(MembersBeneficiaryModel::class, 'mem_id', 'id');
    }

    public function toApprovals()
    {
        return $this->hasOne(Approvals::class, 'mem_trans_id', 'id');
    }
}
