<?php

namespace App\Http\Controllers\Main\MasterFiles\Users;

use App\Http\Controllers\Controller;
use App\Http\Repositories\MasterFiles\Users\UserInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller
{
    protected $userRepository;

    public function __construct(UserInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function view(Request $request)
    {
        $users = $this->userRepository->getUsers($request);

        return Inertia::render('MasterFiles/Users/ListUser');
    }
}
