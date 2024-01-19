import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { getClients } from "../../api/getClients";
import { Button } from "../ui/button";

export function TableClients() {
    const { data } = useQuery({
        queryKey: ['api-clients'],
        queryFn: getClients
    })

    console.log(data)
    return (
        <Table className="w-[50%] mx-auto text-base rounded-md bg-slate-200 dark:bg-slate-600">
            <TableCaption>A list of your recent invoices.</TableCaption>
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

                            <TableCell ><Button>Calcular</Button></TableCell>
                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>
    )
}