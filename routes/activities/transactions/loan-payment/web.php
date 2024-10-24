<?php

use App\Http\Controllers\Main\Activities\LoanPaymentController;

Route::get('/view', [LoanPaymentController::class, 'listView'])->name('loan.pay.view');
Route::get('/search-apprv-trans', [LoanPaymentController::class, 'searchLoanTrans'])->name('loan.pay.search');

//POST METHODS
Route::post('/create-payment', [LoanPaymentController::class, 'submitPayment'])->name('loan.pay.create');
