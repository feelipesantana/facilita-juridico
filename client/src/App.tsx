import { ModalCreateClient } from "./components/Modals/ModalCreateClient"
import { ModalRoute } from "./components/Modals/ModalRoute"
import { ModeToggle } from "./components/ModeToogle"
import { TableClients } from "./components/TableClients"
import { Button } from "./components/ui/button"
import { Toaster } from "./components/ui/toaster"


function App() {

  return (
    <main className=' p-10  h-screen w-screen'>
      <header className="flex justify-between items-center border-b h-20 mb-20">
        <h1 className=" font-bold text-3xl ">Facilita Jurídico</h1>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 text-zinc-500 dark:text-white">
            <Button variant={"outline"}><ModalCreateClient /></Button>
            <Button variant={"outline"} className="text-pink-500 hover:text-pink-800"><ModalRoute /></Button>
          </div>
          <ModeToggle />
        </div>

      </header>

      <TableClients />
      <Toaster />
    </main>
  )
}

export default App
