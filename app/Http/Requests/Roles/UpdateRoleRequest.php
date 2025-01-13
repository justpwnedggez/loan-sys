<?php

namespace App\Http\Requests\Roles;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRoleRequest extends FormRequest
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
            'id' => 'required',
            'permissions' => [
                'required',
                'array',
                function ($attribute, $value, $fail) {
                    // Check if at least one top-level permission is true
                    if (!$this->hasAnyTruePermission($value)) {
                        $fail('At least one of the following permissions must be checked: dashboard, activities, approvals, master files, reports, or sessions.');
                    }

                    // Validate child permissions
                    $this->validateChildPermissions($value, $fail);
                },
            ],
        ];
    }

    /**
     * Check if any top-level permission is true.
     */
    private function hasAnyTruePermission(array $permissions): bool
    {
        return $permissions['dashboard'] ||
            ($permissions['activities']['enabled'] && ($permissions['activities']['act_loan_transaction'] || $permissions['activities']['act_loan_amortization'] || $permissions['activities']['act_membership'])) ||
            ($permissions['approvals']['enabled'] && ($permissions['approvals']['loan_approvals'] || $permissions['approvals']['membership_approvals'])) ||
            ($permissions['master_files']['enabled'] && ($permissions['master_files']['mf_users'] || $permissions['master_files']['mf_roles'] || $permissions['master_files']['mf_memberships'] || $permissions['master_files']['mf_loans'])) ||
            ($permissions['reports']['enabled'] && ($permissions['reports']['report_loans'] || $permissions['reports']['report_memberships'] || $permissions['reports']['report_trans_register'] || $permissions['reports']['report_trans_payment'])) ||
            ($permissions['sessions']['enabled'] && $permissions['sessions']['active_sessions']);
    }

    /**
     * Validate child permissions.
     */
    private function validateChildPermissions(array $permissions, $fail)
    {
        $this->checkEnabledChildPermission($permissions['activities'], 'activities', ['act_loan_transaction', 'act_loan_amortization', 'act_membership'], $fail);
        $this->checkEnabledChildPermission($permissions['approvals'], 'approvals', ['loan_approvals', 'membership_approvals'], $fail);
        $this->checkEnabledChildPermission($permissions['master_files'], 'master files', ['mf_users', 'mf_roles', 'mf_memberships', 'mf_loans'], $fail);
        $this->checkEnabledChildPermission($permissions['reports'], 'reports', ['report_loans', 'report_memberships', 'report_trans_register', 'report_trans_payment'], $fail);
        $this->checkEnabledChildPermission($permissions['sessions'], 'sessions', ['active_sessions'], $fail);
    }

    /**
     * Check if at least one child permission is true if the parent is enabled.
     */
    private function checkEnabledChildPermission(array $permissionGroup, string $groupName, array $childKeys, $fail)
    {
        if ($permissionGroup['enabled'] && !array_filter(array_intersect_key($permissionGroup, array_flip($childKeys)))) {
            $fail("At least one of the {$groupName} must be checked if {$groupName} is enabled.");
        }
    }
}
