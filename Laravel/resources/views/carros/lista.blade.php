<x-layout>

    <x-slot:titulo>Carros</x-slot:titulo>



    @session('success')

        {{ session('success') }}

    @endsession



    @if (count($carros) > 0)

        <table>

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

                                <button type="submit">Editar</button>

                            </form>

                            <form action="/carros/deletar" method="post">

                                @csrf

                                <input type="hidden" name="id" value="{{ $carro->id }}">

                                <button type="submit">Deletar</button>

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