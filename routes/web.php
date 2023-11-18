<?php

use Coleus\Account\Http\Controller\AuthController;
use Coleus\Account\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => config('account.route_prefix', 'account'),
    'middleware' => HandleInertiaRequests::class,
], function () {
    Route::middleware(['web', 'guest'])->group(function () {
        Route::get('/login', [AuthController::class, 'loginForm'])->name('getLoginForm');
        Route::post('/login', [AuthController::class, 'loginWithEmail'])->name('postLoginWithEmail');
        Route::get('/register', [AuthController::class, 'registerForm'])->name('getRegisterForm');
        Route::post('/register', [AuthController::class, 'registerWithEmail'])->name('postRegisterWithEmail');
        Route::get('/forgot-password', [AuthController::class, 'forgotPasswordForm'])->name('getForgetPasswordForm');
        Route::post('/forgot-password', [AuthController::class, 'forgotPasswordWithEmail'])->name('postForgetPasswordWithEmail');
        Route::get('/reset-password/{token}', [AuthController::class, 'resetPasswordForm'])->name('getResetPasswordForm');
        Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('postResetPassword');
    });
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth')->name('postLogout');
});
