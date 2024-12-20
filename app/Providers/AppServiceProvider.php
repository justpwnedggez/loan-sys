<?php

namespace App\Providers;

use App\Http\Repositories\Activities\Memberships\MembershipsInterface;
use App\Http\Repositories\Activities\Memberships\MembershipsRepository;
use App\Http\Repositories\Activities\Transactions\LoanAmortization\LoanAmortizationInterface;
use App\Http\Repositories\Activities\Transactions\LoanAmortization\LoanAmortizationRepository;
use Illuminate\Support\ServiceProvider;
use App\Http\Repositories\Activities\Transactions\Loans\LoansInterface as ActLoansInterface;
use App\Http\Repositories\Activities\Transactions\Loans\LoansRepository;
use App\Http\Repositories\Approvals\Loans\LoanApprovalsInterface;
use App\Http\Repositories\Approvals\Loans\LoanApprovalsRepository;
use App\Http\Repositories\Approvals\Memberships\MembershipApprovalsInterface;
use App\Http\Repositories\Approvals\Memberships\MembershipApprovalsRepository;
use App\Http\Repositories\Dashboard\DashboardInterface;
use App\Http\Repositories\Dashboard\DashboardRepository;
use App\Http\Services\MasterFiles\Users\UserService;
use App\Http\Repositories\MasterFiles\Roles\RoleInterface;
use App\Http\Repositories\MasterFiles\Users\UserInterface;
use App\Http\Repositories\MasterFiles\Loans\LoansInterface;
use App\Http\Repositories\MasterFiles\Roles\RoleViewRepository;
use App\Http\Repositories\MasterFiles\Users\UserViewRepository;
use App\Http\Repositories\MasterFiles\Loans\LoansViewRepository;
use App\Http\Repositories\MasterFiles\Memberships\MembershipInterface;
use App\Http\Repositories\MasterFiles\Memberships\MembershipRepository;
use App\Http\Repositories\Reports\MasterFiles\Loans\LoansReportInterface;
use App\Http\Repositories\Reports\MasterFiles\Loans\LoansReportRepository;
use App\Http\Repositories\Reports\MasterFiles\Membership\MembershipReportInterface;
use App\Http\Repositories\Reports\MasterFiles\Membership\MembershipReportRepository;
use App\Http\Repositories\Reports\Transactions\TransactionPayment\TransPaymentReportInterface;
use App\Http\Repositories\Reports\Transactions\TransactionPayment\TransPaymentReportRepository;
use App\Http\Repositories\Reports\Transactions\TransactionRegister\TransRegisterReportInterface;
use App\Http\Repositories\Reports\Transactions\TransactionRegister\TransRegisterReportRepository;
use App\Http\Services\Activities\Memberships\MembershipService;
use App\Http\Services\Activities\Transactions\LoanPaymentService;
use App\Http\Services\Activities\Transactions\LoanTransService;
use App\Http\Services\Approvals\LoanApprovals\CreateApprovalService as CreateLoanAprovalService;
use App\Http\Services\Approvals\LoanApprovals\UpdateMemberService;
use App\Http\Services\Approvals\MembershipApprovals\CreateApprovalService as CreateMembershipApprovalService;
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

        //Dashboard
        $this->app->bind(DashboardInterface::class, DashboardRepository::class);

        //Master Files
        $this->app->bind(UserInterface::class, UserViewRepository::class);
        $this->app->bind(LoansInterface::class, LoansViewRepository::class);
        $this->app->bind(RoleInterface::class, RoleViewRepository::class);

        //Activities
        $this->app->bind(MembershipsInterface::class, MembershipsRepository::class);
        $this->app->bind(ActLoansInterface::class, LoansRepository::class);
        $this->app->bind(MembershipInterface::class, MembershipRepository::class);
        $this->app->bind(LoanApprovalsInterface::class, LoanApprovalsRepository::class);
        $this->app->bind(MembershipApprovalsInterface::class, MembershipApprovalsRepository::class);
        $this->app->bind(LoanAmortizationInterface::class, LoanAmortizationRepository::class);

        //Reports
        $this->app->bind(LoansReportInterface::class, LoansReportRepository::class);
        $this->app->bind(MembershipReportInterface::class, MembershipReportRepository::class);
        $this->app->bind(TransRegisterReportInterface::class, TransRegisterReportRepository::class);
        $this->app->bind(TransPaymentReportInterface::class, TransPaymentReportRepository::class);


        //Services
        //Activities
        $this->app->singleton(MembershipService::class, function($app) {
            return new MembershipService();
        });
        $this->app->singleton(LoanTransService::class, function($app) {
            return new LoanTransService();
        });
        $this->app->singleton(LoanPaymentService::class, function($app) {
            return new LoanPaymentService();
        });
        $this->app->singleton(CreateLoanAprovalService::class, function($app) {
            return new CreateLoanAprovalService();
        });
        $this->app->singleton(UpdateMemberService::class, function($app) {
            return new UpdateMemberService();
        });
        $this->app->singleton(CreateMembershipApprovalService::class, function($app) {
            return new CreateMembershipApprovalService();
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
