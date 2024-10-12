<?php

use App\Http\Controllers\Main\Activities\MembershipsController;

Route::get('/view', [MembershipsController::class, 'createView'])->name('mems.view');

Route::post('/create', [MembershipsController::class, 'createSubmit'])->name('mems.create');
