import { Routes, Route } from "react-router-dom";
import { CreateNote, Home } from "./pages";
import { Footer, Navbar } from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
