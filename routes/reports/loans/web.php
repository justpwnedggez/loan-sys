<?php

use App\Http\Controllers\Main\Reports\LoansController;


Route::get('/index', [LoansController::class, 'repView'])->name('report.loan.index');
