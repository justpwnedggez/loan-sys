<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

//Controllers
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Main\MasterFiles\Users\UsersController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware', 'auth'], function () {
    Route::group(['middleware', 'verified'], function () {
        Route::group(['prefix' => '/main', 'as' => 'main.'], function () {

            Route::get('/dashboard', function () {
                return Inertia::render('Dashboard/index');
            })->name('dashboard');

            Route::group(['prefix' => '/activity'], function () {

                Route::get('/transactions', function () {
                    return Inertia::render('Activities/Transactions');
                })->name('act_trans');

                Route::get('/memberships', function () {
                    return Inertia::render('Activities/Memberships');
                })->name('act_mems');
            });

            Route::group(['prefix' => '/approval'], function () {

                Route::get('/loans', function () {
                    return Inertia::render('Approvals/LoanApproval');
                })->name('loan_approve');

                Route::get('/memberships', function () {
                    return Inertia::render('Approvals/MemsApproval');
                })->name('mems_approve');
            });


            Route::group(['prefix' => '/master-files'], function () {
                Route::get('/loan', function () {
                    return Inertia::render('MasterFiles/Loan');
                })->name('loans');

                Route::group(['prefix' => '/users'], function () {
                    //Get Methods

                    Route::get('/list', [UsersController::class, 'listView'])->name('list.user');
                    Route::get('/view/{id}', [UsersController::class, 'userView'])->name('view.user');

                    Route::get('/create', function () {
                        return Inertia::render('MasterFiles/Users/CreateUser');
                    })->name('add.user');

                    //Post Methods

                    //User Create
                    Route::post('/create/post', [UsersController::class, 'createUsers'])->name('post.create.user');

                });



                Route::get('/memberships', function () {
                    return Inertia::render('MasterFiles/Memberships');
                })->name('mems');
            });

            Route::group(['prefix' => '/reports'], function () {
                Route::get('/reports', function () {
                    return Inertia::render('Reports/LoanPortfolio');
                })->name('loan_portf');
            });

            Route::group(['prefix' => '/sessions'], function () {
                Route::get('/active-users', function () {
                    return Inertia::render('Sessions/index');
                })->name('active.sess');
            });

            Route::group(['prefix' => '/profile', 'as' => 'profile.'], function () {
                Route::get('/index', [ProfileController::class, 'edit'])->name('edit');
                Route::patch('/update', [ProfileController::class, 'update'])->name('update');
                Route::delete('/delete', [ProfileController::class, 'destroy'])->name('destroy');
            });
        });
    });
});

require __DIR__ . '/auth.php';
