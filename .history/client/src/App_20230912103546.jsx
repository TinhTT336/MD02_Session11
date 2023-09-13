import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListProduct from './pages/product/ListProduct'
import ListUser from './pages/admin/ListUser'
import Loading from './components/base/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListProduct /> */}
      {/* <ListUser /> */}
      <Loading />
    </>
  )
}

export default App
