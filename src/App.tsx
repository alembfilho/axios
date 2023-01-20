import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from './api'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const login = await axios.post('/login', {
        cpf: '03067247744',
        password: 'Mudar@123'
      })

      const accessToken = login?.data?.accessToken

      console.log(accessToken)

      const refresh = await axios.get('/refresh-login/')

      // const dadosCadastrais = await axios.get('/DadosCadastrais/2', { headers: { Authorization: `Bearer ${accessToken}` } })

      console.log(refresh)

    }

    getData()
  }, [count])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
