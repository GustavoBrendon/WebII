import { API_PATH } from "../constants/constants";

async function createCarro(dataCarro) {
  const res = await fetch(`${API_PATH}/carros`, {
    method: dataCarro.id == null ? "POST" : "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(dataCarro),
  });

  return await res.json();
}

async function listCarros() {
  const res = await fetch(`${API_PATH}/carros`);

  const carros = await res.json();

  return carros;
}

async function deleteCarro(id) {
  const res = await fetch(`${API_PATH}/carros`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ id: id }),
  });

  return await res.json();
}

export { createCarro, listCarros, deleteCarro };
