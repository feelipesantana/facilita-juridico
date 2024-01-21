import { useQuery } from "@tanstack/react-query";
import { getClients } from "../../api/get-clients.ts";
import { DataProps, columns } from "./columns.tsx";
import { DataTable } from "./DataTable.tsx";
export function TableClients() {

    const { data } = useQuery<DataProps[]>({
        queryKey: ['api-clients'],
        queryFn: getClients,
        initialData: []
    })

    return (
        <DataTable data={data} columns={columns} />
    )
}