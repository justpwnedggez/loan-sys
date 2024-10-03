<?php

use App\Http\Controllers\Main\MasterFiles\LoansController;

Route::get('/list', [LoansController::class, 'listView'])->name('loans');
