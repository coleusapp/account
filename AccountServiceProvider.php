<?php

namespace Coleus\Account;

use Coleus\Account\Commands\AccountCommand;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use Spatie\Permission\PermissionServiceProvider;

class AccountServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $this->app->register(PermissionServiceProvider::class);

        $package
            ->name('account')
            ->hasConfigFile()
            ->hasViews()
            ->hasMigration('create_users_table')
            ->hasMigration('create_password_reset_tokens_table')
            ->hasCommand(AccountCommand::class)
            ->hasRoute('account')
            ->hasAssets()
            ->hasInstallCommand(function (InstallCommand $command) {
                $command
                    ->publishConfigFile()
                    ->publishAssets()
                    ->publishMigrations();
            });
    }
}
