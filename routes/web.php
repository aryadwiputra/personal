<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", HomeController::class)->name("home");
Route::get("/about", AboutController::class)->name("about");

Route::resource('articles', ArticleController::class)->only(['index', 'show']);

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
