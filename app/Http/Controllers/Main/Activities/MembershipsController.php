<?php

namespace App\Http\Controllers\Main\Activities;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class MembershipsController extends Controller
{
    public function createView()
    {
        return Inertia::render('Activities/Memberships');
    }
}
