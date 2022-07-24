import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Genres from "./Components/Genres/Genres";
import Header from "./Components/Header";
import Images from "./Components/MovieTVDetails/Images";
import MTDetails from "./Components/MovieTVDetails/MTDetails";
import Videos from "./Components/MovieTVDetails/Videos";
import Navbar from "./Components/Navbar";
import People from "./Components/People/People";

const App = () => {
  return (
  <BrowserRouter>
    <main>
      <div className="content">
      <Header/>
        <Navbar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path=":type/:id" element={<MTDetails />} />
          <Route path=":type/:id/videos" element={<Videos />} />
          <Route path=":type/:id/images" element={<Images />} />
          <Route path=":type/:id/genres" element={<Genres />} />
          <Route path="person/:id" element={<People />} />
        </Routes>
      </div>
    </main>
    </BrowserRouter>
  );
};

export default App;
