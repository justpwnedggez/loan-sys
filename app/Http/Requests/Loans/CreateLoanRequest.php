<?php

namespace App\Http\Requests\Loans;

use Illuminate\Foundation\Http\FormRequest;

class CreateLoanRequest extends FormRequest
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
            'loan_code' => 'required',
            'loan_name' => 'required|string',
            'max_loan_amount' => 'required',
            'loan_period' => 'required|int',
            'interest' => 'required|int',
            'loan_purpose' => 'required|string'
        ];
    }
}
