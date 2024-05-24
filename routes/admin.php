<?php

use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SeriesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->prefix('admin')->as('admin.')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    Route::resource('articles', ArticleController::class);
    Route::resource('projects', ProjectController::class)->except('show');
    Route::resource('series', SeriesController::class)->except('show');
});

require __DIR__ . '/auth.php';
