<?php

namespace Coleus\Account\Commands;

use Illuminate\Console\Command;

class AccountCommand extends Command
{
    public $signature = 'account';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
