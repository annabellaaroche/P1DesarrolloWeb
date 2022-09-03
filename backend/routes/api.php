<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\ESTADO_CONTROLLER;
use  App\Http\Controllers\USUARIO_CONTROLLER;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([],
    function($router){
        Route::get('/estado', 'ESTADO_CONTROLLER@obtenerEstado');
        Route::get('/usuario', 'USUARIO_CONTROLLER@obtenerUsuarios');
        Route::post('/usuario', 'USUARIO_CONTROLLER@store');
        Route::put('/usuario/{id}', 'USUARIO_CONTROLLER@update');
        Route::delete('/usuario/{id}', 'USUARIO_CONTROLLER@destroy');
        Route::get('/marcajeD', 'MARCAJE_DETAIL_CONTROLLER@obtenerDetalle');
        Route::post('/marcajeD', 'MARCAJE_DETAIL_CONTROLLER@store');
        Route::get('/usuario/{id}', 'USUARIO_CONTROLLER@show');
        Route::get('/marcajeD/{id}', 'MARCAJE_DETAIL_CONTROLLER@show');
        Route::get('/marcajeD/user/{id}/{fecha}', 'MARCAJE_DETAIL_CONTROLLER@showByuser');

    }
);
