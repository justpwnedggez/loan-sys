<?php

use App\Http\Controllers\Main\MasterFiles\MembershipsController;

Route::get('/list', [MembershipsController::class, 'listView'])->name('list.mems');
