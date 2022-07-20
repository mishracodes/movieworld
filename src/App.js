import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header";
import MTDetails from "./Components/MovieTVDetails/MTDetails";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
  <BrowserRouter>
    <main>
      <div className="content">
      <Header/>
        <Navbar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="movie/:id" element={<MTDetails />} />
          <Route path="tv/:id" element={<MTDetails />} />
        </Routes>
      </div>
    </main>
    </BrowserRouter>
  );
};

export default App;
