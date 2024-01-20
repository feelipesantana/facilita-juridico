import { useQueryClient } from "@tanstack/react-query";
import { api } from "../services/axios";

export async function calculateRoute(){

    const response = await api.get('/calc-route')
    
    return response.data
    
  
}