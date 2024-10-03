<?php

use App\Http\Controllers\Main\Sessions\SessionsController;

Route::get('/list', [SessionsController::class, 'listView'])->name('sess.list');
