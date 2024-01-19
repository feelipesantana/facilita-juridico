import { api } from "../services/axios";

export async function calculateDistance(email: string){
    
    const response = await api.post("/calc-distance",{
        email
    })


    return response.data
}