<?php

use Coleus\Account\Http\Controller\AuthController;
use Coleus\Account\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => config('account.route_prefix', 'account'),
    'middleware' => HandleInertiaRequests::class
], function () {
    // Route::get('login', fn () => 'login');
    // Route::post('login', fn () => 'login');
    // Route::get('register', fn () => 'login');
    // Route::post('register', fn () => 'login');
    // Route::get('forgot-password', fn () => 'forgot-password');
    // Route::post('forgot-password', fn () => 'forgot-password');
    // Route::get('reset-password', fn () => 'reset-password');
    // Route::post('reset-password', fn () => 'reset-password');

    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
        Route::post('/login', [AuthController::class, 'loginWithEmail']);
        Route::get('/register', [AuthController::class, 'registerForm'])->name('register');
        Route::post('/register', [AuthController::class, 'registerWithEmail']);
        Route::get('/forgot-password', [AuthController::class, 'forgotPasswordForm'])->name('password.request');
        Route::post('/forgot-password', [AuthController::class, 'forgotPasswordWithEmail'])->name('password.email');
        Route::get('/reset-password/{token}', [AuthController::class, 'resetPasswordForm'])->name('password.reset');
        Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('password.update');
    });
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');
});
