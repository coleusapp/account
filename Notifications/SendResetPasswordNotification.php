<?php

namespace Coleus\Account\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendResetPasswordNotification extends ResetPasswordNotification implements ShouldQueue
{
    use Queueable;
}
