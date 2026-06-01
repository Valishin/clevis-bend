<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Título')
                    ->required(),

                Textarea::make('description')
                    ->label('Descripción')
                    ->rows(4)
                    ->columnSpanFull(),

                TextInput::make('price')
                    ->label('Precio')
                    ->numeric()
                    ->prefix('€'),

                FileUpload::make('images')
                    ->label('Imágenes')
                    ->image()
                    ->multiple()
                    ->reorderable()
                    ->columnSpanFull(),

                Repeater::make('features')
                    ->label('Características')
                    ->schema([
                        TextInput::make('title')
                            ->label('Título')
                            ->placeholder('Ej: Material')
                            ->nullable(),
                        Textarea::make('body')
                            ->label('Descripción')
                            ->required()
                            ->rows(2),
                    ])
                    ->addActionLabel('Añadir característica')
                    ->collapsible()
                    ->columnSpanFull(),
            ]);
    }
}