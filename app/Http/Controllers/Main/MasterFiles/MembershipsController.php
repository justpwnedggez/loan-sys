<?php

namespace App\Http\Controllers\Main\MasterFiles;

use App\Http\Controllers\Controller;
use App\Http\Repositories\MasterFiles\Memberships\MembershipInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembershipsController extends Controller
{
    protected $membersRepository;

    public function __construct(MembershipInterface $membersRepository)
    {
        $this->membersRepository = $membersRepository;
    }
    public function listView()
    {
        $members = $this->membersRepository->getMembers();
        return Inertia::render('MasterFiles/Memberships/ListMembers', ['members' => $members]);
    }

    public function memberView($id)
    {
        $member = $this->membersRepository->findMember($id);
        return Inertia::render('MasterFiles/Memberships/ViewMember', ['member' => $member[0]]);
    }
}
