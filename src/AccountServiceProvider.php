<?php

namespace Coleus\Account;

use Coleus\Account\Commands\AccountCommand;
use Spatie\LaravelPackageTools\Package;
// use Spatie\LaravelPackageTools\PackageServiceProvider;

class AccountServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        // $this->app->register(Spatie\Permission\PermissionServiceProvider::class);

        $package
            ->name('account')
            ->hasConfigFile()
            ->hasViews()
            ->hasMigration('create_users_table')
            ->hasMigration('create_password_reset_tokens_table')
            ->hasCommand(AccountCommand::class);
    }
}
