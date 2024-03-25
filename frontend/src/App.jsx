import Header from "./components/Header"
import Hero from "./components/Hero"
import Events from "./components/Events"
// import Footer from "./components/Footer"
import Footer from "./components/footer"
import { useEffect, useState } from "react"




function App() {
  const [tokens, setTokens] = useState()
  const t = localStorage.getItem("token")
  useEffect(() => {
    setTokens(t)    
  })
  return (
    <div>
      <Header  token={tokens} />
      <Hero token={tokens}/>
      <Events token={tokens}/>      
      <Footer />
    </div>
    )
}

export default App
