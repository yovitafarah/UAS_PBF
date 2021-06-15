<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/users/home');

Auth::routes();

Route::group([
    'prefix'     => 'admin',
    'as'         => 'admin.',
    'namespace'  => 'Admin'
], function () {
    Route::view('/{any?}', 'admin.index')->name('dashboard')->where('any', '.*');
});

Route::group([
    'prefix'     => 'users',
    'as'         => 'users.',
    'namespace'  => 'Users',
], function () {
    Route::view('/{any?}', 'index')->name('home')->where('any', '.*');
});