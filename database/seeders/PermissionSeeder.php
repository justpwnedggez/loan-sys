<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{

    protected $names = [
        'access nav-dashboard',
        'access nav-activities',
        'view act_loan_transaction',
        'view act_loan_amortization',
        'view act_membership',
        'access nav-approvals',
        'view loan_approvals',
        'view membership_approvals',
        'access nav-master-files',
        'view mf_users',
        'view mf_roles',
        'view mf_memberships',
        'view mf_loans',
        'access nav-reports',
        'view report_loans',
        'view report_memberships',
        'view report_trans_register',
        'view report_trans_payment',
        'access nav-sessions',
        'view active_sessions'
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->names as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        $this->command->info('Permissions seeded successfully!');
    }
}
