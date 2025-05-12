
<form method="POST" action="{{ isset($carro) ? '/carros/atualizar' : '/carros' }}">

    @csrf

    <input type="hidden" name="id" value="{{ $carro->id ?? ''}}">

    <div>

        <label for="placa">Placa:</label><br>

        <input type="text" id="placa" name="placa" value="{{ $carro->placa ?? '' }}" required>

    </div>

    <div>

        <label for="modelo">Modelo:</label><br>

        <input type="text" id="modelo" name="modelo" value="{{ $carro->modelo ?? '' }}" required>

    </div>

    <div>

        <label for="ano_publicacao">Ano de publicação:</label><br>

        <input type="number" id="ano_publicacao" name="ano_publicacao" value="{{ $carro->ano_publicacao ?? '' }}"

            required>

    </div>

    <div>

        <label for="marca">Marca:</label><br>

        <textarea id="marca" name="marca" required>{{ $carro->marca ?? '' }}</textarea>

    </div>

      <button type="submit">Criar</button>

</form>
