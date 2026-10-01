import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Hello, World! 👋</h1>
      <p>Your first React app is up and running.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </main>
  )
}

export default App
