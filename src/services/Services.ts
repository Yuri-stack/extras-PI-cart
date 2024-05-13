import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-80n2.onrender.com/'
})

export const listar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}