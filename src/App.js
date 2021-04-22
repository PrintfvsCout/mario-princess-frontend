import { BrowserRouter as Router } from "react-router-dom"

import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"

import UpperNavBar from "./Components/UI/UpperNavBar"
import BottomNavBar from "./Components/UI/BottomNavBar"

import PageRoutes from "./Components/Views/PageRoutes"

const App = () => {
  return (
    <>
      <Router>
        <UpperNavBar />
        <div style={{ marginTop: "1%" }}></div>
        <Container>
          <PageRoutes />
        </Container>
        <div style={{ marginTop: "5%" }} data-testid="nav-routes">
          <ToastContainer />
          <BottomNavBar />
        </div>
      </Router>
    </>
  )
}

export default App
