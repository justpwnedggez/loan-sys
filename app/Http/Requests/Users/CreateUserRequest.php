<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
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
            "first_name" => "required|string|max:50",
            "last_name" => "required|string|max:50",
            "email" => "required|email|unique:users,email",
            "is_active" => "required|string",
            "user_role" => "required",
            "password" => "required|min:8|",
        ];
    }

    public function messages()
    {
        return [];
    }
}
