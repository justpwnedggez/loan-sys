<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Http\Services\MasterFiles\Users\UserService;
use App\Http\Repositories\MasterFiles\Users\UserInterface;
use App\Http\Repositories\MasterFiles\Users\UserViewRepository;
use App\Http\Repositories\MasterFiles\Users\UserCreateRepository;

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
