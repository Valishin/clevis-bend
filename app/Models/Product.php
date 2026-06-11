<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'category',
        'description',
        'price',
        'images',
        'features',
    ];

    protected $casts = [
        'images'   => 'array',
        'features' => 'array',
    ];
}
