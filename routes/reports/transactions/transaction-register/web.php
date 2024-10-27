<?php

use App\Http\Controllers\Main\Reports\TransRegisterController;


Route::get('/transaction-register/index', [TransRegisterController::class, 'repIndex'])->name('report.trans-reg.index');
Route::get('/transaction-register/filter', [TransRegisterController::class, 'toFilter'])->name('report.trans-reg.filter');
