import { useEffect, useState } from "react";

import { createCarro, deleteCarro, listCarros } from "../data_acess/carro_acess.js";

import { listAcessorios } from "../data_acess/acessorio_acess.js";

import { listMotoristas } from "../data_acess/motorista_acess.js";

const Carros = () => {
  const [carros, setCarros] = useState([]);

  const [allAcessorios, setAllAcessorios] = useState([]);

  const [motoristas, setMotoristas] = useState([]);

  const [action, setAction] = useState("Criar");

  const [id, setId] = useState(null);

  const [marca, setMarca] = useState("");

  const [modelo, setModelo] = useState("");

  const [fabricante, setFabricante] = useState("");
  
  const [preco, setPreco] = useState("");

  const [ano, setAno] = useState("");
  
  const [motorista, setMotorista] = useState(0);


  useEffect(() => {
    listCarros().then((carros) => setCarros(carros));

    listAcessorios().then((acessorios) => {
      acessorios = acessorios.map((acessorio) => {
        acessorio.checked = false;

        return acessorio;
      });

      setAllAcessorios(acessorios);
    });

    listMotoristas().then((motoristas) => {setMotoristas(motoristas) 
      setMotorista(motoristas[0].id)});
  }, []);

  function handleSubmitCarro(e) {
    e.preventDefault();

    const data = {
      id: id,

      marca: marca,

      modelo: modelo,

      fabricante: fabricante,

      preco: preco,

      ano: ano,

      MotoristaId: motorista,

      acessorios: allAcessorios
        .filter((acessorio) => acessorio.checked)
        .map((acessorio) => acessorio.id),
    };

    createCarro(data).then((res) => {
      alert(res.message);

      listCarros().then((carros) => setCarros(carros));
    });

    setId(null);

    setMarca("");

    setModelo("");

    setFabricante("");

    setPreco("");

    setAno("");

    setMotorista("");

    setAllAcessorios(
      allAcessorios.map((acessorio, index) => {
        acessorio.checked = false;
        return acessorio;
      })
    );

    setAction("Criar");
  }

  function handleEditButton(e) {
    const carroId = e.target.dataset.id;

    const carro = carros.find((f) => f.id == carroId);

    if (carro) {
      setId(carro.id);

      setMarca(carro.marca);

      setModelo(carro.modelo);

      setFabricante(carro.fabricante);

      setPreco(carro.preco);

      setAno(carro.ano);

      setMotorista(carro.MotoristaId);

      allAcessorios.forEach((acessorio) => {
        acessorio.checked = carro.Acessorios.some((a) => a.id == acessorio.id);
      });

      setAllAcessorios(allAcessorios.map((v) => v));

      setAction("Editar");
    }
  }

  function handleDelButton(e) {
    deleteCarro(e.target.dataset.id).then((res) => {
      alert(res.message);

      listCarros().then((carros) => setCarros(carros));
    });
  }

  function toggleSelectAcessorios(id) {
    const index = allAcessorios.findIndex((acessorio) => acessorio.id == id);

    allAcessorios[index].checked = !allAcessorios[index].checked;

    setAllAcessorios(allAcessorios.map((v) => v));
  }

  return (
    <div>
      <h1>Carros</h1>

      <form onSubmit={handleSubmitCarro} method="post">
        <label>Marca</label>
        <br />

        <input
          type="text"
          value={marca}
          required
          onInput={(e) => setMarca(e.target.value)}
        />
        <br />

        <label>Modelo</label>
        <br />

        <input
          type="text"
          value={modelo}
          required
          onInput={(e) => setModelo(e.target.value)}
        />
        <br />

        <label>Fabricante</label>
        <br />

        <input
          type="text"
          value={fabricante}
          required
          onInput={(e) => setFabricante(e.target.value)}
        />
        <br />

        <label>Preço</label>
        <br />

        <input
          type="number"
          value={preco}
          required
          onInput={(e) => setPreco(e.target.value)}
        />
        <br />

        <label>Ano</label>
        <br />

        <input
          type="number"
          value={ano}
          required
          onInput={(e) => setAno(e.target.value)}
        />
        <br />

        <label>Motorista</label>
        <br />

        <select
          value={motorista}
          required
          onChange={(e) => setMotorista(e.target.value)}
        >
          {motoristas.map((motorista, index) => {
            return (
              <option key={index} value={motorista.id}>
                {motorista.nome}
              </option>
            );
          })}
        </select>

        <br />

        <label>Acessorios</label>
        <br />

        {allAcessorios.map((acessorio, index) => {
          return (
            <div key={acessorio.id}>
              <label>
                <input
                  type="checkbox"
                  value={acessorio.id}
                  checked={acessorio.checked}
                  onChange={(e) => toggleSelectAcessorios(acessorio.id)}
                />

                {acessorio.nome}
              </label>
            </div>
          );
        })}

        <button>{action}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Marca</th>

            <th>Modelo</th>

            <th>Fabricante</th>

            <th>Preço</th>

            <th>Ano</th>

            <th>Motorista</th>

            <th>Acessorios</th>

            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {carros.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.marca}</td>

                <td>{v.modelo}</td>

                <td>{v.fabricante}</td>
                
                <td>{v.preco}</td>

                <td>{v.ano}</td>

                <td>{v.Motoristum?.nome}</td>
                
                <td>
                  {v.Acessorios.map((v, i) => {
                    return <p key={i}>{v.nome}</p>;
                  })}
                </td>

                <td>
                  <button data-id={v.id} onClick={handleEditButton}>
                    Editar
                  </button>

                  <button data-id={v.id} onClick={handleDelButton}>
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Carros;
