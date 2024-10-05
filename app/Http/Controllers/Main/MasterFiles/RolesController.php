<?php

namespace App\Http\Controllers\Main\MasterFiles;

use App\Http\Controllers\Controller;
use App\Http\Repositories\MasterFiles\Roles\RoleInterface;
use App\Http\Requests\Roles\CreateRoleRequest;
use App\Http\Requests\Roles\UpdateRoleRequest;
use App\Http\Services\MasterFiles\Roles\RoleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RolesController extends Controller
{
    protected $rolesRepository;
    protected $roleService;

    public function __construct(RoleInterface $rolesRepository, RoleService $roleService)
    {
        $this->rolesRepository = $rolesRepository;
        $this->roleService = $roleService;
    }

    public function listView(Request $request)
    {
        $roles = $this->rolesRepository->getRoles($request);

        return Inertia::render('MasterFiles/Roles/CreateRole', ['roles' => $roles]);
    }

    public function createRole(CreateRoleRequest $request)
    {
        $role = $this->roleService->createRole($request->validated());

        return response()->json([
            'message' => 'Role ' . $role->name . ' created successfully'
        ]);
    }

    public function viewRole($id)
    {
        $role = $this->rolesRepository->findRole($id);

        return Inertia::render('MasterFiles/Roles/ViewRole', ['role' => $role]);
    }

    public function updateRole(UpdateRoleRequest $request)
    {
        return $this->roleService->applyPermissions($request->validated());
    }
}
