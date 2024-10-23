<?php

use App\Http\Controllers\Main\Approvals\MembershipsController;

Route::get('list', [MembershipsController::class, 'listView'])->name('apprv.mems.list');
Route::get('/search-member', [MembershipsController::class, 'searchMember'])->name('apprv.mems.search');

//POST METHOD
Route::post('/create-approval', [MembershipsController::class, 'submitApproval'])->name('apprv.mems.create');
