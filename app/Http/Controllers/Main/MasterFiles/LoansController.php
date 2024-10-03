<?php

namespace App\Http\Controllers\Main\MasterFiles;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\MasterFiles\Loans\LoansInterface;

class LoansController extends Controller
{
    protected $userRepository;
    protected $userService;

    public function __construct(LoansInterface $loansViewInterface)
    {
        $this->userRepository = $loansViewInterface;
    }

    public function listView(Request $request)
    {

        return Inertia::render('MasterFiles/Loan');
    }
}
