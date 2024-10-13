<?php

use App\Http\Controllers\Main\Activities\LoanPaymentController;

Route::get('/view', [LoanPaymentController::class, 'createView'])->name('loan.pay.view');
