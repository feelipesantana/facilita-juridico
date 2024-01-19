import { ModeToggle } from "./components/ModeToogle"
import { TableClients } from "./components/TableClients"


function App() {

  return (
    <main className=' p-10  h-screen w-screen'>
      <header className="flex justify-between items-center border-b h-20 mb-20">
        <h1 className=" font-bold text-3xl ">Facilita Jurídico</h1>
        <ModeToggle />
      </header>

      <TableClients />

    </main>
  )
}

export default App
