<?php

use App\Http\Controllers\Main\Activities\TransactionsController;

Route::get('/create', [TransactionsController::class, 'createView'])->name('trans.create');
