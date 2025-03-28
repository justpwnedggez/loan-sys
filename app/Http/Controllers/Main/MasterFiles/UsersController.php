<?php

namespace App\Http\Controllers\Main\MasterFiles;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Users\CreateUserRequest;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Http\Services\MasterFiles\Users\UserService;
use App\Http\Repositories\MasterFiles\Users\UserInterface;

class UsersController extends Controller
{
    protected $userRepository;
    protected $userService;

    public function __construct(UserInterface $userRepository, UserService $userService)
    {
        $this->userRepository = $userRepository;
        $this->userService = $userService;
    }

    public function listView(Request $request)
    {
        $users = $this->userRepository->getUsers($request);

        return Inertia::render('MasterFiles/Users/ListUser', ['users' => $users]);
    }

    public function createUserView()
    {
        $roles = $this->userRepository->getRoles()->toArray();

        return Inertia::render('MasterFiles/Users/CreateUser', ['roles' => $roles]);
    }

    public function userView($id)
    {
        $user = $this->userRepository->findUser($id);
        $roles = $this->userRepository->getRoles()->toArray();
        $userRoleIds = $user->roles->pluck('id')->toArray();
        return Inertia::render('MasterFiles/Users/ViewUser', ['user' => $user, 'roles' => $roles, 'userRoleIds' => $userRoleIds]);
    }

    public function createUsers(CreateUserRequest $request)
    {
        $user = $this->userService->createUser($request->validated());

        return response()->json([
            'message' => 'User ' . $user->first_name . ' created successfully'
        ]);
    }

    public function updateUsers(UpdateUserRequest $request)
    {
        $user = $this->userService->updateUser($request->validated());
    }
}
