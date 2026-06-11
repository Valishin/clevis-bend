<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/',               [PageController::class, 'home']);
Route::get('/about',          [PageController::class, 'about']);
Route::get('/contact',        [PageController::class, 'contact']);
Route::post('/contact',       [PageController::class, 'contactStore']);
Route::get('/products',       [PageController::class, 'products']);
Route::get('/products/{product}', [PageController::class, 'productDetail']);

// Fallback: cualquier ruta no definida → Coming Soon
Route::fallback([PageController::class, 'comingSoon']);
