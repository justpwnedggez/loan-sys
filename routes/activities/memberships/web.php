<?php

use App\Http\Controllers\Main\Activities\MembershipsController;

Route::get('create', [MembershipsController::class, 'createView'])->name('mems.create');
