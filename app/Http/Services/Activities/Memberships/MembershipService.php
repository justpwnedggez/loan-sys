<?php

namespace App\Http\Services\Activities\Memberships;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;

class MembershipService
{
    use ModelsTrait, CommonTrait;

    public function createMembership(array $data)
    {
        $membership = $this->insertMembershipData($this->membershipModel(), $this->memberData($data));
        $this->insertMemberParentData($this->memberParentModel(), $this->memberParentData($data, $membership->id));
        $this->insertMemberBeneficiaryData($this->memberBeneficiaryModel(), $this->memberBeneficiaryData($data, $membership->id));

        return $membership;
    }

    public function insertMembershipData($model, $memberData)
    {
        return $model->create($memberData);
    }

    public function insertMemberParentData($model, $memParentData)
    {
        foreach($memParentData as $data) {
            return $model->create($data);
        }
    }

    public function insertMemberBeneficiaryData($model, $memBenefData)
    {
        foreach($memBenefData as $data) {
            return $model->create($data);
        }
    }

    public function memberData($data)
    {
        return [
            'mem_code' => $this->generateMembershipCode('mem_code'),
            'first_name' => $data['first_name'],
            'middle_name' => $data['middle_name'],
            'last_name' => $data['last_name'],
            'subscription_amount' => $this->removeCommaAmount($data['amount']),
            'subscription_years' => $data['years'],
            'status' => 'Y',
            'present_address' => $data['present_address'],
            'permanent_address' => $data['permanent_address'],
            'birth_date' => $data['birth_date'],
            'age' => $data['age'],
            'birth_place' => $data['birth_place'],
            'religion' => $data['religion'],
            'tribe' => $data['tribe'],
            'civil_status' => $data['civil_status'],
            'phone_number' => $data['phone_number'],
            'tin_no' => $data['tin_no'],
            'highest_educ_attainment' => $data['highest_educ_attainment'],
            'occupation' => $data['occupation'],
            'gross_annual_income' => $data['income_range'][0],
            'cooperative_member_name' => $data['cooperative_member_name'],
            'rsbsa' => $data['rsbsa_status'][0],
            'farm_area' => $data['farm_area'],
            'farm_location' => $data['farm_location'],
            'reason_for_joining' => $data['reason_for_joining'],
        ];
    }

    public function memberParentData($data, $id)
    {
        return [
            0 => [
                'mem_id' => $id,
                'parent_type' => 'F',
                'first_name' => $data['father_first_name'],
                'middle_name' => $data['father_middle_name'],
                'last_name' => $data['father_last_name'],
            ],
            1 => [
                'mem_id' => $id,
                'parent_type' => 'M',
                'first_name' => $data['mother_first_name'],
                'middle_name' => $data['mother_middle_name'],
                'last_name' => $data['mother_last_name'],
            ],
        ];
    }

    public function memberBeneficiaryData($data, $id)
    {
        return [
            0 => [
                'mem_id' => $id,
                'name' => $data['beneficiary_name1'],
                'relationship' => $data['beneficiary_rel1'],
            ],
            1 => [
                'mem_id' => $id,
                'name' => $data['beneficiary_name2'],
                'relationship' => $data['beneficiary_rel2'],
            ],
            2 => [
                'mem_id' => $id,
                'name' => $data['beneficiary_name3'],
                'relationship' => $data['beneficiary_rel3'],
            ],
        ];
    }
}
