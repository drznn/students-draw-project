//aqui fica as requisições e serviços
import axios from "axios";
//criando uma instãncia única
const axiosInstancia = axios.create({
  baseURL: "http://localhost:3000/"
});

export const api = {
  get(endpoint){
    return axiosInstancia.get(endpoint);
  }, //método
  post(endpoint, body){
    return axiosInstancia.post(endpoint, body);
  }
};