import { api } from "../services/axios";

interface RegisterClientProps{
    name: string;
    email:string;
    phone:string;
    coordX:number;
    coordY:number
}
export async function registerClient(data:RegisterClientProps){
     
    const response = await api.post('/clients',{
        name: data.name,
        email: data.email,
        phone: data.phone,
        coordX: Number(data.coordX),
        coordY: Number(data.coordY),
    })

    return response.data
}