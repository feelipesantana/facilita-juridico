import { useQueryClient } from "@tanstack/react-query";
import { registerClient } from "../../api/register-client";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useToast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";

const createSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(2),
    coordX: z.number(),
    coordY: z.number()
})

type CreateSchema = z.infer<typeof createSchema>

export function ModalCreateClient() {
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { register, handleSubmit } = useForm<CreateSchema>()

    const handleCreate = async (data: CreateSchema) => {
        console.log(data)
        try {
            const result = await registerClient(data)

            if (result) {
                queryClient.invalidateQueries({ queryKey: ['api-clients'] })
                queryClient.invalidateQueries({ queryKey: ['route'] })

                toast({
                    title: "Registro",
                    description: "Cliente cadastrado com sucesso!"
                })
            }
            console.log(result)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <Dialog>
            <DialogTrigger>Cadastrar</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadatrar Cliente</DialogTitle>
                    <DialogDescription className="mt-20">
                        Cadastre um cliente na plataforma
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleSubmit(handleCreate)}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" {...register("name")} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" type="email" className="col-span-3" {...register("email")} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Telefone
                        </Label>
                        <Input id="username" className="col-span-3" {...register("phone")} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="coordX" className="text-right">
                            Coordenada X
                        </Label>
                        <Input id="coordX" className="col-span-3" {...register("coordX")} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="coordY" className="text-right">
                            Coordenada Y
                        </Label>
                        <Input id="coordY" className="col-span-3" {...register("coordY")} />
                    </div>

                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            <Toaster />
        </Dialog>
    )
}