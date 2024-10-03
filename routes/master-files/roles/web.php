<?php

use App\Http\Controllers\Main\MasterFiles\RolesController;

Route::get('/list', [RolesController::class, 'listView'])->name('list.roles');
