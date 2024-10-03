<?php

use App\Http\Controllers\Main\Dashboard\DashboardController;

Route::get('/index', [DashboardController::class, 'dashView'])->name('dashboard');
