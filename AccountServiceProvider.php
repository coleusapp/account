<?php

namespace Coleus\Account;

use Coleus\Account\Commands\AccountCommand;
use Illuminate\Support\ServiceProvider;

class AccountServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'account');
        $this->mergeConfigFrom(__DIR__.'/config/account.php', 'account');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->commands([
            AccountCommand::class,
        ]);
        $this->publishes([
            __DIR__.'/resources/dist' => public_path('dist/coleus/account')
        ], 'dist');

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
    //         ->hasAssets()
    //         ->hasInstallCommand(function (InstallCommand $command) {
    //             $command
    //                 ->publishConfigFile()
    //                 ->publishAssets()
    //                 ->publishMigrations();
    //         });
    // }
}
