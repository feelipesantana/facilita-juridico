import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { CalculateRouteProps, calculateRoute } from "../../api/calculate-route";
import { ArrowRight } from "lucide-react";

export function ModalRoute() {
    const { data } = useQuery<CalculateRouteProps[]>({
        queryKey: ['route'],
        queryFn: calculateRoute,
        refetchOnMount: true
    })

    return (
        <Dialog>
            <DialogTrigger>Sync melhor rota</DialogTrigger>
            <DialogContent className="min-w-[600px] w-full">
                <DialogHeader>
                    <DialogTitle>Rota</DialogTitle>
                    <DialogDescription className="mt-20">
                        Melhor rota syncronizada em ordem
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-2 items-center justify-center my-10 p-2">
                    {data?.map((res, _index) => {

                        return (
                            <div className="flex items-center gap-2 justify-start ">
                                <div key={res.id} className="bg-slate-200 rounded-lg p-2  w-32 flex text-nowrap dark:bg-slate-600 ">
                                    <span className="flex no-wrap">{res.name}</span>
                                </div>
                                {data.length - 1 !== _index && <ArrowRight className="min-h-4 min-w-4" />}
                            </div>

                        )
                    })}
                </div>

            </DialogContent>
        </Dialog>
    )
}