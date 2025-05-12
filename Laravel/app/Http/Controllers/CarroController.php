<?php

namespace App\Http\Controllers;

use App\Models\Carro;
use Illuminate\Http\Request;

class CarroController extends Controller
{
    public function exibirCarros()

    {

        $carros = Carro::all();

        return view('carros.lista', compact('carros'));

    }

    public function criarCarro()

    {

        return view('carros.form');

    }

    public function armazenarCarro(Request $request)

    {

        Carro::create(

            [

                'placa' => $request->input('placa'),

                'modelo' => $request->input('modelo'),

                'ano_publicacao' => $request->input('ano_publicacao'),

                'marca' => $request->input('marca')

            ]

        );

        return redirect('/carros')->with('success', 'Carro criado com sucesso!');

    }

    public function editarCarro(Request $request)

    {

        $id = $request->input('id');

        $carro = Carro::findOrFail($id);

        return view('carros.form', ['carro' => $carro]);

    }

    public function atualizarCarro(Request $request)

    {

        $id = $request->input('id');

        $carro = Carro::findOrFail($id);

        $carro->update(

            [

                'placa' => $request->input('placa'),

                'modelo' => $request->input('modelo'),

                'ano_publicacao' => $request->input('ano_publicacao'),

                'marca' => $request->input('marca')

            ]

        );

        return redirect('/carros')->with('success', 'Carro atualizado com sucesso!');

    }

    public function deletarCarro(Request $request)

    {

        $id = $request->input('id');

        $carro = Carro::findOrFail($id);

        $carro->delete();

        return redirect('/carros')->with('success', 'Carro deletado com sucesso!');

    }
}
