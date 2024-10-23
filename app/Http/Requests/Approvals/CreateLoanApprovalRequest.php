<?php

namespace App\Http\Requests\Approvals;

use Illuminate\Foundation\Http\FormRequest;

class CreateLoanApprovalRequest extends FormRequest
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
        'loan_trans_id' => "required|int",
        'approve_code' => "required",
        'approve_desc' => "required|string",
        'auth_user' => "required|int",
        'status' => "required|string",
        'start_date' => "required|date",
        'end_date' => "required|date"
        ];
    }
}
