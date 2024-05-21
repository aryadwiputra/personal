<?php

use App\Http\Controllers\Admin\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->prefix('admin')->as('admin.')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    Route::resource('blog', BlogController::class);
});

require __DIR__ . '/auth.php';
