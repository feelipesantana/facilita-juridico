import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { getClients } from "../../api/get-clients.ts";
import { Button } from "../ui/button";
import { calculateDistance } from "../../api/calculate-distance.ts";
import { useToast } from "../ui/use-toast.ts";

export function TableClients() {
    const { toast } = useToast()
    const { data } = useQuery({
        queryKey: ['api-clients'],
        queryFn: getClients
    })

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

    console.log(data)
    return (
        <Table className="w-[50%] mx-auto text-base rounded-md bg-slate-200 dark:bg-slate-600">
            <TableHeader>
                <TableRow>
                    <TableHead >Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Calcular Rota</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {data?.map(res => {
                    return (
                        <TableRow key={res.id}>
                            <TableCell >{res.name}</TableCell>
                            <TableCell >{res.email}</TableCell>
                            <TableCell >{res.phone}</TableCell>
                            <TableCell ><Button onClick={() => handleDistance(res.email, res.name)}>Calcular</Button></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}