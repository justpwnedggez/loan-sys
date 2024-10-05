<?php

use App\Http\Controllers\Main\MasterFiles\RolesController;

//Get Methods
Route::get('/list', [RolesController::class, 'listView'])->name('list.roles');
Route::get('/view/{id}', [RolesController::class, 'viewRole'])->name('view.role');

//Post Methods
Route::post('/create', [RolesController::class, 'createRole'])->name('create.role');
Route::post('/update', [RolesController::class, 'updateRole'])->name('update.role');
