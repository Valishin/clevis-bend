<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home', [
            'featuredProducts' => Product::latest()
                ->take(4)
                ->get()
                ->map(fn($p) => [
                    'id'          => $p->id,
                    'title'       => $p->title,
                    'description' => $p->description,
                    'price'       => $p->price,
                    'images'      => collect($p->images ?? [])
                        ->map(fn($img) => Storage::url($img))
                        ->values(),
                ]),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function contactStore(Request $request)
    {
        $request->validate([
            'name'             => 'required|string|max:100',
            'company'          => 'nullable|string|max:100',
            'email'            => 'required|email',
            'phone'            => 'nullable|string|max:30',
            'inquiry_type'     => 'required|string',
            'product_interest' => 'nullable|string|max:200',
            'message'          => 'required|string|max:2000',
        ]);

        // \Illuminate\Support\Facades\Mail::to('info@clevisbend.com')
        //     ->send(new \App\Mail\ContactInquiry($request->validated()));

        return back()->with('success', "Your inquiry has been sent. We'll be in touch within 24 business hours.");
    }

    public function products(): Response
    {
        return Inertia::render('ComingSoon', ['page' => 'Products']);
    }

    public function productDetail(Product $product): Response
    {
        return Inertia::render('ProductDetail', [
            'product' => [
                'id'          => $product->id,
                'title'       => $product->title,
                'category'    => $product->category,
                'description' => $product->description,
                'price'       => $product->price,
                'images'      => collect($product->images ?? [])
                    ->map(fn($img) => Storage::url($img))
                    ->values(),
                'features'    => $product->features ?? [],
            ],
        ]);
    }

    public function comingSoon(): Response
    {
        return Inertia::render('ComingSoon');
    }
}
