import { ColumnDef, SortingState, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({ data, columns }: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(),
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    })


    return (
        <Table className="w-[50%] mx-auto text-base rounded-md bg-slate-200 dark:bg-slate-600">
            <TableHeader >
                {table.getHeaderGroups().map(headerGroup => {
                    return (
                        <TableRow key={headerGroup.id} >
                            {headerGroup.headers.map(header => {
                                return (
                                    <TableHead onClick={header.column.getToggleSortingHandler()} key={header.id} >
                                        <div className="flex items-center gap-4">
                                            {flexRender(header.column.columnDef.header, header.getContext())}

                                            {{
                                                asc: <ArrowUp className="w-4 h-4" />,
                                                desc: <ArrowDown className="w-4 h-4" />,
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                    </TableHead>
                                )
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
