import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// import Admin from "./pages/Admin"

function App() {
  const url = import.meta.env.VITE_URL + ':' + import.meta.env.VITE_PORT;
  console.log(url);
  
  return (
    <>
      {/* <Admin
        url={url}
      /> */}
      <Navbar />
      <Home />
    </>
  )
}

export default App;
