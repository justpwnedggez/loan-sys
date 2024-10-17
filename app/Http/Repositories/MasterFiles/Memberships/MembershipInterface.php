<?php

namespace App\Http\Repositories\MasterFiles\Memberships;

interface MembershipInterface
{
    public function getMembers();
    public function findMember($id);
}
