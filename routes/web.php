<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Product;

Route::get('/', function () {
    return Inertia::render('Home', [
        'featuredProducts' => Product::latest()
            ->take(4)
            ->get()
            ->map(fn($p) => [
                'id'          => $p->id,
                'title'       => $p->title,
                'description' => $p->description,
                'price'       => $p->price,
                'images'      => collect($p->images ?? [])->map(fn($img) => Storage::url($img))->values(),
            ]),
    ]);
});