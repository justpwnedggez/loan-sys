<?php

namespace App\Http\Requests\Memberships;

use Illuminate\Foundation\Http\FormRequest;

class CreateMembershipRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:50',
            'middle_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'present_address' => 'required|string|max:100',
            'permanent_address' => 'required|string|max:100',
            'birth_date' => 'required|date',
            'age' => 'required|int|max:100',
            'birth_place' => 'required|string|max:100',
            'religion' => 'required|string',
            'tribe' => 'required|string|max:50',
            'civil_status' => 'required|string|max:1',
            'phone_number' => 'required|string|max:20',
            'tin_no' => 'required|string|max:15',
            'highest_educ_attainment' => 'required|string|max:50',
            'occupation' => 'required|string|max:50',
            'beneficiary_name1' => 'string|max:50',
            'beneficiary_rel1' => 'string|max:50',
            'beneficiary_name2' => 'string|max:50',
            'beneficiary_rel2' => 'string|max:50',
            'beneficiary_name3' => 'string|max:50',
            'beneficiary_rel3' => 'string|max:50',
            'cooperative_member_name' => 'required|string|max:50',
            'rsbsa_status' => 'required|array|max:1',
            'income_range' => 'required|array|max:10',
            'farm_area' => 'required',
            'farm_location' => 'required|string|max:100',
            'reason_for_joining' => 'required|string',
            'father_first_name' => 'required|string|max:50',
            'father_middle_name' => 'required|string|max:50',
            'father_last_name' => 'required|string|max:50',
            'mother_first_name' => 'required|string|max:50',
            'mother_middle_name' => 'required|string|max:50',
            'mother_last_name' => 'required|string|max:50',
            'amount' => 'required',
            'years' => 'required'
        ];
    }
}
