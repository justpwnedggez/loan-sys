<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = [
            [
                'first_name' => 'John',
                'last_name' => 'Doe',
                'email' => 'admin@example.com',
                'role' => 'Admin',
            ],
            [
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'email' => 'cashier@example.com',
                'role' => 'Cashier',
            ],
            [
                'first_name' => 'Mike',
                'last_name' => 'Johnson',
                'email' => 'manager@example.com',
                'role' => 'Manager',
            ],
            [
                'first_name' => 'Emily',
                'last_name' => 'Davis',
                'email' => 'bookkeeper@example.com',
                'role' => 'Bookkeeper',
            ],
            [
                'first_name' => 'Alice',
                'last_name' => 'Brown',
                'email' => 'accounting@example.com',
                'role' => 'Accounting Officer',
            ],
            [
                'first_name' => 'Tom',
                'last_name' => 'Wilson',
                'email' => 'board@example.com',
                'role' => 'Board of Directors',
            ],
        ];

        foreach ($users as $userData) {
            $user = User::create([
                'first_name' => $userData['first_name'],
                'last_name' => $userData['last_name'],
                'email' => $userData['email'],
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
                'is_active' => 'Y',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $user->assignRole($userData['role']);
        }
    }
}
