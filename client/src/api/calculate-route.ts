import { api } from "../services/axios";

export interface CalculateRouteProps{
    id: number
    x: number;
    y: number;
    name: string;
    id_client: string;
}
export async function calculateRoute(){

    const response = await api.get('/calc-route')
    
    return response.data
    
  
}