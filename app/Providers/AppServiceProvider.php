<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Http\Services\MasterFiles\Users\UserService;
use App\Http\Repositories\MasterFiles\Roles\RoleInterface;
use App\Http\Repositories\MasterFiles\Users\UserInterface;
use App\Http\Repositories\MasterFiles\Loans\LoansInterface;
use App\Http\Repositories\MasterFiles\Roles\RoleViewRepository;
use App\Http\Repositories\MasterFiles\Users\UserViewRepository;
use App\Http\Repositories\MasterFiles\Loans\LoansViewRepository;
use App\Http\Services\Activities\Memberships\MembershipService;
use App\Http\Services\MasterFiles\Loans\LoanService;
use App\Http\Services\MasterFiles\Roles\RoleService;

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
        $this->app->bind(RoleInterface::class, RoleViewRepository::class);

        //Services
        //Activities
        $this->app->singleton(MembershipService::class, function($app) {
            return new MembershipService();
        });
        //Master Files
        $this->app->singleton(UserService::class, function($app) {
            return new UserService();
        });
        $this->app->singleton(RoleService::class, function($app) {
            return new RoleService();
        });
        $this->app->singleton(LoanService::class, function($app) {
            return new LoanService();
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
