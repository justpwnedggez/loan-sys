<?php

namespace App\Http\Services\MasterFiles\Users;

use App\Http\Traits\CommonTrait;
use Spatie\Permission\Models\Role;

class UserService
{
    use CommonTrait;

    public function createUser(array $data)
    {
        $user = \App\Models\User::create($data);

        return $user->assignRole($data['user_role']['name']);
    }

    public function updateUser(array $data)
    {
        // Find the role by its ID
        $role = Role::findOrFail($data['user_role']);

        // Find the user model instance
        $user = \App\Models\User::findOrFail($data['id']);

        // Update the user's active status
        $user->update([
            'is_active' => $data['is_active'],
        ]);

        // Assign the new role and ensure it's the only one
        $user->syncRoles([$role->id]);

        return $user;
    }

}
