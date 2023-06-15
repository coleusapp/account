<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => config('account.route_prefix', 'account')], function () {
    Route::get('login', fn () => 'login');
    Route::post('login', fn () => 'login');
    Route::get('register', fn () => 'login');
    Route::post('register', fn () => 'login');
    Route::get('forgot-password', fn () => 'forgot-password');
    Route::post('forgot-password', fn () => 'forgot-password');
    Route::get('reset-password', fn () => 'reset-password');
    Route::post('reset-password', fn () => 'reset-password');
});
