<?php

use App\Http\Controllers\Main\Approvals\LoansController;

Route::get('/list', [LoansController::class, 'listView'])->name('apprv.loans.list');
Route::get('/search-trans', [LoansController::class, 'searchLoanTrans'])->name('apprv.loans.search');

