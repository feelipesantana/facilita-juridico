import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { calculateDistance } from "../../api/calculate-distance";

export type DataProps = {
    id: string;
    name: string;
    email: string;
    phone: string;
    x: number;
    y: number;
}


export const columns: ColumnDef<DataProps>[] = [

    {
        accessorKey: 'name',
        header: "Name",
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {

        accessorKey: 'phone',
        header: 'Phone',

    },
    {

        accessorKey: 'distance',
        header: 'Distancia',
        cell: ({ row }) => {
            async function handleDistance(email: string, name: string) {
                try {
                    const dist = await calculateDistance(email)
                    toast({
                        title: "Distancia",
                        description: `A distancia do cliente ${name} é de ${dist.distance}`
                    })
                } catch (err) {
                    console.error(err)
                }
            }

            return <Button onClick={() => handleDistance(row.getValue('email'), row.getValue('name'))}>Calcular</Button>
        },

    },

]