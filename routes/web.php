<?php

use App\Http\Controllers\ProfileController;

//Controllers
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return redirect()->route('login');
});

Route::group(['middleware', 'auth'], function () {

    Route::group(['middleware', 'verified'], function () {

        Route::group(['prefix' => '/main', 'as' => 'main.'], function () {
            //Dashboard
            Route::prefix('/dashboard')->group(base_path('routes/dashboard/web.php'));

            //Activities
            Route::prefix('/activities/transactions/loans')->group(base_path('routes/activities/transactions/loans/web.php'));
            Route::prefix('/activities/transactions/loan-renewal')->group(base_path('routes/activities/transactions/loan-renewal/web.php'));
            Route::prefix('/activities/transactions/loan-payment')->group(base_path('routes/activities/transactions/loan-payment/web.php'));
            Route::prefix('/activities/memberships')->group(base_path('routes/activities/memberships/web.php'));

            //Approvals
            Route::prefix('/approvals/loans')->group(base_path('routes/approvals/loans/web.php'));
            Route::prefix('/approvals/memberships')->group(base_path('routes/approvals/memberships/web.php'));

            //Master Files
            Route::prefix('/master-files/loans')->group(base_path('routes/master-files/loans/web.php'));
            Route::prefix('/master-files/users')->group(base_path('routes/master-files/users/web.php'));
            Route::prefix('/master-files/roles')->group(base_path('routes/master-files/roles/web.php'));
            Route::prefix('/master-files/memberships')->group(base_path('routes/master-files/memberships/web.php'));

            //Reports
            Route::prefix('/reports/loans')->group(base_path('routes/reports/loans/web.php'));
            Route::prefix('/reports/members')->group(base_path('routes/reports/memberships/web.php'));
            Route::prefix('/reports/transaction-register')->group(base_path('routes/reports/transactions/transaction-register/web.php'));
            Route::prefix('/reports/transaction-payment')->group(base_path('routes/reports/transactions/transaction-payment/web.php'));
            //Sessions
            Route::prefix('/sessions/list')->group(base_path('routes/sessions/web.php'));

            Route::group(['prefix' => '/profile', 'as' => 'profile.'], function () {
                Route::get('/index', [ProfileController::class, 'edit'])->name('edit');
                Route::patch('/update', [ProfileController::class, 'update'])->name('update');
                Route::delete('/delete', [ProfileController::class, 'destroy'])->name('destroy');
            });
        });
    });
});

require __DIR__ . '/auth.php';
