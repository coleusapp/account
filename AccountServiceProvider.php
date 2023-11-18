<?php

namespace Coleus\Account;

use Illuminate\Support\ServiceProvider;

class AccountServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('account', function ($app) {
            return new Account();
        });
    }

    public function boot()
    {
        //
    }
    // public function configurePackage(Package $package): void
    // {
    //     $this->app->register(PermissionServiceProvider::class);
    //
    //     $package
    //         ->setBasePath($package->basePath)
    //         ->name('account')
    //         ->hasConfigFile('Account/account')
    //         ->hasViews()
    //         ->hasMigration('create_users_table')
    //         ->hasMigration('create_password_reset_tokens_table')
    //         ->hasCommand(AccountCommand::class)
    //         ->hasRoute('account')
    //         ->hasAssets()
    //         ->hasInstallCommand(function (InstallCommand $command) {
    //             $command
    //                 ->publishConfigFile()
    //                 ->publishAssets()
    //                 ->publishMigrations();
    //         });
    // }
}
