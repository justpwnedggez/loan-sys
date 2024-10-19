<?php

namespace App\Http\Requests\Loans;

use Illuminate\Foundation\Http\FormRequest;

class CreateLoanTransRequest extends FormRequest
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
            'mem_id' => 'required|int',
            'loan_id' => 'required|int',
            'loan_collat_id' => 'required|int',
            'trans_no' => 'required|string|unique:loan_transactions,trans_no',
            'loan_collat_desc' => 'required|string',
            'status' => 'required|string',
            'principal_amt' => 'required|numeric',
            'total_interest' => 'required|numeric',
            'service_deduction' => 'required|numeric',
            'cbu' => 'required|numeric',
            'net_amt' => 'required|numeric'
        ];
    }
}
