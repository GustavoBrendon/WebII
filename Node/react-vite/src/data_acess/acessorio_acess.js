import { API_PATH } from "../constants/constants";



async function createAcessorio(dataAcessorio) {}



async function listAcessorios() {

    const res = await fetch(`${API_PATH}/acessorios`);

    const acessorios = await res.json();

    return acessorios;

}



async function editAcessorio() {}



async function deleteAcessorio() {}



export { createAcessorio, listAcessorios, editAcessorio, deleteAcessorio };