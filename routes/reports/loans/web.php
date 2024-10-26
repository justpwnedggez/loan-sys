<?php

use App\Http\Controllers\Main\Reports\LoansController;


Route::get('/loan-master/index', [LoansController::class, 'repIndex'])->name('report.loan.index');
//POST METHODS
Route::get('/loan-master/filter', [LoansController::class, 'toFilter'])->name('report.loan.filter');
