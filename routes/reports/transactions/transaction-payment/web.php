<?php

use App\Http\Controllers\Main\Reports\TransPaymentController;


Route::get('/transaction-payment/index', [TransPaymentController::class, 'repIndex'])->name('report.trans-pay.index');
Route::get('/transaction-payment/filter', [TransPaymentController::class, 'toFilter'])->name('report.trans-pay.filter');
