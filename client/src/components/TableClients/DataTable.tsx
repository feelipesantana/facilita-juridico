import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({ data, columns }: DataTableProps<TData, TValue>) {

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })


    return (
        <Table className="w-[50%] mx-auto text-base rounded-md bg-slate-200 dark:bg-slate-600">
            <TableHeader>
                {table.getHeaderGroups().map(headerGroup => {
                    return (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return <TableHead key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                            })}
                        </TableRow>
                    )
                })}


            </TableHeader>
            <TableBody>

                {table.getRowModel().rows.map(row => {
                    return (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map(cell => {
                                console.log(cell)
                                return (
                                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                )
                            })}

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
