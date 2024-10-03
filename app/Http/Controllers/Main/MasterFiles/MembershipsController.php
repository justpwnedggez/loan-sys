<?php

namespace App\Http\Controllers\Main\MasterFiles;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class MembershipsController extends Controller
{
    public function listView()
    {
        return Inertia::render('MasterFiles/Memberships');
    }
}
