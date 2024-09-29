<?php

namespace App\Http\Controllers\Main\MasterFiles\Users;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
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

    public function view(Request $request)
    {
        $users = $this->userRepository->getUsers($request);

        return Inertia::render('MasterFiles/Users/ListUser', ['users' => $users]);
    }

    public function createUsers(CreateUserRequest $request)
    {
        $user = $this->userService->createUser($request->validated());

        return response()->json([
            'message' => 'User ' . $user->first_name . ' created successfully'
        ]);
    }
}
