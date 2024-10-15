<?php

namespace App\Http\Repositories\Activities\Transactions\Loans;

interface LoansInterface
{
    public function retrieveData();
    public function retrieveMemberData($request);
}
