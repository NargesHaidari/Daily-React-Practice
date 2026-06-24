
import UseCounter from "./components/UseCounter"

export default function App() {
  let {count, increase, decrease} = UseCounter();

  return (
    <div>
      <h1 className="text-3xl">Your count is: {count}</h1>
      <button className="text-2xl m-2 bg-blue-200 p-2" onClick={increase}>Increase</button>
      <button className="text-2xl m-2 bg-blue-200 p-2" onClick={decrease}>Decrease</button>
    </div>
  )
}



