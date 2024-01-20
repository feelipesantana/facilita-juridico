import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { calculateRoute } from "../../api/calculate-route";
import { ArrowRight } from "lucide-react";

export function ModalRoute() {
    const { data } = useQuery({
        queryKey: ['route'],
        queryFn: calculateRoute,
        refetchOnMount: true
    })

    return (
        <Dialog>
            <DialogTrigger>Sync melhor rota</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Rota</DialogTitle>
                    <DialogDescription className="mt-20">
                        Melhor rota syncronizada em ordem
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 items-center justify-center my-10 p-2">
                    {data?.map((res: any) => {
                        return (
                            <div className="flex items-center gap-2 justify-start ">
                                <div key={res.id} className="bg-cyan-700 rounded-lg p-2  w-32 flex text-nowrap ">
                                    <span className="flex no-wrap">{res.name}</span>
                                </div>
                                {data.lenght !== data.length - 1 && <ArrowRight className="min-h-4 min-w-4" />}
                            </div>

                        )
                    })}
                </div>

            </DialogContent>
        </Dialog>
    )
}