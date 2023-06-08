<?php

namespace Coleus\Account;

use Coleus\Account\Commands\AccountCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class AccountServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('account')
            ->hasConfigFile()
            ->hasViews()
            ->hasMigration('create_users_table')
            ->hasMigration('create_password_reset_tokens_table')
            ->hasCommand(AccountCommand::class);
    }
}
