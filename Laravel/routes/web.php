<?php

use App\Http\Controllers\CarroController;
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
Route::get('/carros', [CarroController::class, 'exibirCarros']);
Route::get('/carros/criar', [CarroController::class, 'criarCarro']);
Route::post('/carros/armazenar', [CarroController::class, 'armazenarCarro']);
Route::post('/carros/editar', [CarroController::class, 'editarCarro']);
Route::post('/carros/atualizar', [CarroController::class, 'atualizarCarro']);
Route::post('/carros/deletar', [CarroController::class, 'deletarCarro']);
