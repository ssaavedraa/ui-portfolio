import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
// import { Maintenance } from './components/Maintenance/Maintenance'
import { ScrollDown } from './components/ScrollDown/ScrollDown'
import Contact from './components/Contact/Contact'

function App (): JSX.Element {
  const [scroll, setScroll] = useState(0)

  const handleScroll = (): void => {
    setScroll(() => window.scrollY)
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Contact />
      {scroll < (window.innerHeight * 0.3) && <ScrollDown/>}
    </div>
  )
}

export default App
