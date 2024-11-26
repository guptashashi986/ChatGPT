import { useContext } from "react"
import ChatSection  from "./components/chatSection/ChatSection.jsx"
import Separation from "./components/separation/Separation.jsx"
import Sidebar from "./components/Sidebar/Sidebar"
import { dataContext } from "./context/UserContext.jsx"


function App() {
  //let data=useContext(dataContext)
  return (
    <>
      <Sidebar/>
      <Separation/>
      <ChatSection/>
    </>
  )
}

export default App
