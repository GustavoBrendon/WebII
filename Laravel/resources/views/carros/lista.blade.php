<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<x-layout>

    <x-slot:titulo>Carros</x-slot:titulo>



    @session('success')

        {{ session('success') }}

    @endsession



    @if (count($carros) > 0)

        <table class="table table-striped">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Placa</th>

                    <th>Modelo</th>

                    <th>Descrição</th>

                    <th>Marca</th>

                </tr>

            </thead>

            <tbody>

                @foreach ($carros as $carro)

                    <tr>

                        <td>{{ $carro->id }}</td>

                        <td>{{ $carro->placa }}</td>

                        <td>{{ $carro->modelo }}</td>

                        <td>{{ $carro->ano_publicacao }}</td>

                        <td>{{ $carro->marca }}</td>

                        <td>

                            <form action="/carros/editar" method="post">

                                @csrf

                                <input type="hidden" name="id" value="{{ $carro->id }}">

                                <button type="submit" class="btn btn-success">Editar</button>

                            </form>

                            <form action="/carros/deletar" method="post">

                                @csrf

                                <input type="hidden" name="id" value="{{ $carro->id }}">

                                <button type="submit" class="btn btn-success">Deletar</button>

                            </form>

                        </td>

                    </tr>

                @endforeach

            </tbody>

        </table>

    @else

        <p>Nenhum carro encontrado.</p>

    @endif

</x-layout>