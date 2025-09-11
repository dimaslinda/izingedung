<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('/slf', function () {
    return Inertia::render('SLF');
})->name('slf');

Route::get('/pbg', function () {
    return Inertia::render('PBG');
})->name('pbg');
