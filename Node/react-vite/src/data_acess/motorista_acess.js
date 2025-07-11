import { API_PATH } from "../constants/constants";



async function createMotorista(dataMotorista) {}



async function listMotoristas() {

    const res = await fetch(`${API_PATH}/motoristas`);

    const motoristas = await res.json();

    return motoristas;

}



async function editMotorista() {}



async function deleteMotorista() {}



export { createMotorista, listMotoristas, editMotorista, deleteMotorista };