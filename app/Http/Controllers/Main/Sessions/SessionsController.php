<?php

namespace App\Http\Controllers\Main\Sessions;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class SessionsController extends Controller
{
    public function listView()
    {
        return Inertia::render('Sessions/index');
    }
}
