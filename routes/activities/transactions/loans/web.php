<?php

use App\Http\Controllers\Main\Activities\LoansController;

Route::get('/view', [LoansController::class, 'createView'])->name('loan.view');
Route::get('/search-member', [LoansController::class, 'searchMember'])->name('loan.search');
