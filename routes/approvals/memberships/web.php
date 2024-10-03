<?php

use App\Http\Controllers\Main\Approvals\MembershipsController;

Route::get('list', [MembershipsController::class, 'listView'])->name('apprv.mems.list');
