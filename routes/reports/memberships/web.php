<?php

use App\Http\Controllers\Main\Reports\MembershipController;


Route::get('/members-master/index', [MembershipController::class, 'repIndex'])->name('report.members.index');
//POST METHODS
Route::get('/members-master/filter', [MembershipController::class, 'toFilter'])->name('report.members.filter');
