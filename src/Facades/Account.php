<?php

namespace Coleus\Account\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Coleus\Account\Account
 */
class Account extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Coleus\Account\Account::class;
    }
}
