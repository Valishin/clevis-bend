<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Product;

Route::get('/about',    fn() => Inertia::render('About'));
Route::get('/contact',  fn() => Inertia::render('Contact'));
Route::get('/products', fn() => Inertia::render('ComingSoon', ['page' => 'Products']));

// Fallback: cualquier ruta no definida → Coming Soon
Route::fallback(fn() => Inertia::render('ComingSoon'));

Route::post('/contact', function (\Illuminate\Http\Request $request) {
    $data = $request->validate([
        'name'             => 'required|string|max:100',
        'company'          => 'nullable|string|max:100',
        'email'            => 'required|email',
        'phone'            => 'nullable|string|max:30',
        'inquiry_type'     => 'required|string',
        'product_interest' => 'nullable|string|max:200',
        'message'          => 'required|string|max:2000',
    ]);

    // Enviar email (configura MAIL_* en .env)
    // \Illuminate\Support\Facades\Mail::to('info@clevisbend.com')
    //     ->send(new \App\Mail\ContactInquiry($data));

    return back()->with('success', 'Your inquiry has been sent. We\'ll be in touch within 24 business hours.');
});

Route::get('/products/{product}', function (Product $product) {
    return Inertia::render('ProductDetail', [
        'product' => [
            'id'          => $product->id,
            'title'       => $product->title,
            'category'    => $product->category,
            'description' => $product->description,
            'price'       => $product->price,
            'images'      => collect($product->images ?? [])->map(fn($img) => Storage::url($img))->values(),
            'features'    => $product->features ?? [],
        ],
    ]);
});

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