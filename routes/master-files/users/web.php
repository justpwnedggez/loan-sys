<?php

use Inertia\Inertia;
use App\Http\Controllers\Main\MasterFiles\UsersController;

    //Get Methods

    Route::get('/list', [UsersController::class, 'listView'])->name('list.user');
    Route::get('/view/{id}', [UsersController::class, 'userView'])->name('view.user');

    Route::get('/create', [UsersController::class, 'createUserView'])->name('add.user');

    //Post Methods

    //User Create
    Route::post('/create/post', [UsersController::class, 'createUsers'])->name('post.create.user');
    Route::post('/update/post', [UsersController::class, 'updateUsers'])->name('post.update.user');
