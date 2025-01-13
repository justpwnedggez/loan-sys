<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Define the role names.
     */
    protected $names = [
        'Admin',
        'Cashier',
        'Manager',
        'Bookkeeper',
        'Accounting Officer',
        'Board Of Directors',
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->names as $roleName) {
            Role::firstOrCreate(['name' => $roleName, 'guard_name' => 'web']);
        }

        // Fetch the Admin role
        $adminRole = Role::where('name', 'Admin')->firstOrFail();

        // Fetch all permissions
        $permissions = Permission::all();

        // Assign all permissions to the Admin role
        $adminRole->syncPermissions($permissions);

        $this->command->info('Roles and permissions seeded successfully!');
    }
}
