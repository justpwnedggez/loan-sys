<?php

use App\Http\Controllers\Main\MasterFiles\LoansController;

//GET METHOD
Route::get('/list', [LoansController::class, 'listView'])->name('list.loans');
Route::get('/create', [LoansController::class, 'createView'])->name('create.loans');
Route::get('/view/{id}', [LoansController::class, 'updateView'])->name('view.loans');

//POST METHOD
Route::post('/create/submit', [LoansController::class, 'createSubmit'])->name('post.create.loans');
Route::post('/update/submit', [LoansController::class, 'updateSubmit'])->name('post.update.loans');
