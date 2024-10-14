<?php

use App\Http\Controllers\Main\MasterFiles\LoansController;

Route::get('/list', [LoansController::class, 'listView'])->name('list.loans');
Route::get('/create', [LoansController::class, 'createView'])->name('create.loans');
//POST METHOD

Route::post('/create/submit', [LoansController::class, 'createSubmit'])->name('post.create.loans');
