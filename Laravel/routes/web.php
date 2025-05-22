<?php

use App\Http\Controllers\CarroController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/login', [LoginController::class, 'digitarLogin'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);
Route::get('/carros', [CarroController::class, 'exibirCarros'])->middleware('auth');
Route::get('/carros/criar', [CarroController::class, 'criarCarro'])->middleware('auth');
Route::post('/carros/armazenar', [CarroController::class, 'armazenarCarro'])->middleware('auth');
Route::post('/carros/editar', [CarroController::class, 'editarCarro'])->middleware('auth');
Route::post('/carros/atualizar', [CarroController::class, 'atualizarCarro'])->middleware('auth');
Route::post('/carros/deletar', [CarroController::class, 'deletarCarro'])->middleware('auth');
