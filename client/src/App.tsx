import { ModalCreateClient } from "./components/Modals/ModalCreateClient"
import { ModeToggle } from "./components/ModeToogle"
import { TableClients } from "./components/TableClients"


function App() {

  return (
    <main className=' p-10  h-screen w-screen'>
      <header className="flex justify-between items-center border-b h-20 mb-20">
        <h1 className=" font-bold text-3xl ">Facilita Jurídico</h1>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-3 text-zinc-500 dark:text-white">
            <li className="transition duration-300 hover:brightness-75"><ModalCreateClient /></li>
            <li className="transition duration-300 hover:brightness-75">Sobre</li>
            <li className="transition duration-300 hover:brightness-75">Info</li>
          </ul>
          <ModeToggle />
        </div>

      </header>

      <TableClients />

    </main>
  )
}

export default App
