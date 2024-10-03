<?php

namespace App\Http\Controllers\Main\MasterFiles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RolesController extends Controller
{

    public function listView(Request $request)
    {
        return Inertia::render('MasterFiles/Roles');
    }
}
