<?php

use App\Http\Controllers\Main\Activities\LoanRenewalController;

Route::get('/view', [LoanRenewalController::class, 'createView'])->name('loan.renew.view');
