const App=()=>
{
  return(
  <div className="grid grid-cols-5 h-screen text-center">
    <div className="col-span-1 bg-zinc-700">

    </div>
    <div className="col-span-4">
    <div className="container h-133">

    </div>
    <div className="text-white bg-zinc-800 w-1/2 m-auto border rounded-4xl border-zinc-700 flex ">
    <input className="w-full p-4 outline-none  h-full p-6" type="text" placeholder="Ask Something "/>
    <button className="p-6 bg-cyan-800 rounded-4xl w-18 h-auto m-auto">Go</button>
    </div>
    </div>
  </div>
  )
}
export default App