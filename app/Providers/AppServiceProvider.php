<?php

namespace App\Providers;

use App\Http\Repositories\MasterFiles\Loans\LoansInterface;
use App\Http\Repositories\MasterFiles\Loans\LoansViewRepository;
use Illuminate\Support\ServiceProvider;
use App\Http\Services\MasterFiles\Users\UserService;
use App\Http\Repositories\MasterFiles\Users\UserInterface;
use App\Http\Repositories\MasterFiles\Users\UserViewRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //Repositories
        //Master Files
        $this->app->bind(UserInterface::class, UserViewRepository::class);
        $this->app->bind(LoansInterface::class, LoansViewRepository::class);

        //Services
        $this->app->singleton(UserService::class, function($app) {
            return new UserService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
