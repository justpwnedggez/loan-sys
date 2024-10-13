<?php

use App\Http\Controllers\Main\Activities\LoansController;

Route::get('/view', [LoansController::class, 'createView'])->name('loan.view');
