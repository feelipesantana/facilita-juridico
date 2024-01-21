import { api } from "../services/axios";

export async function getClients(){
    const response = await api.get("/clients")
    if(response) return response.data
    
}