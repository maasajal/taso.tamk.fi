import React from 'react';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React Customs Components
import NavbarMenu from "./routes/NavbarMenu";
import FrontPage from './routes/FrontPage';
import Membership from "./routes/Membership";
// import News from "./routes/News";
import News from "./routes/admin/News";
import Proceedings from "./routes/Proceedings";
import Partners from "./routes/Partners";
import Contact from "./routes/Contact";
import Advances from "./routes/Advances";
import Feedback from "./routes/Feedback";


export default function App() {

  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="membership" element={<Membership />} />
        <Route path="news" element={<News />} />
        <Route path="proceedings" element={<Proceedings />} />
        <Route path="advances" element={<Advances />} />
        <Route path="contact" element={<Contact />} />
        <Route path="partners" element={<Partners />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <Outlet />

      <Feedback />

          {/* Out supporter Partners */}
      <div className="partners">
        <h1 className="partners-title">Our Partners</h1>
        <div className="partner-widget-partners" >
          <a href="https://tammerforce.com/" className="partner-widget-item" target="_blank">
            <img src="images/partners/futurice.png" alt="Futurice" />
          </a>
          <a href="https://www.accenture.com/" className="partner-widget-item" target="_blank">
            <img src="images/partners/accenture.png" alt="accenture" />
          </a>
          <a href="https://netum.fi" className="partner-widget-item" target="_blank">
            <img src="images/partners/netum.png" alt="netum" />
          </a>
          <a href="https://www.reaktor.com/tampere/" className="partner-widget-item" target="_blank">
            <img src="images/partners/reaktor.png" alt="reaktor" />
          </a>
          <a href="https://www.experis.fi/academy" className="partner-widget-item" target="_blank">
            <img src="images/partners/experis.png" alt="experis" />
          </a>
          <a href="https://www.getreceipthero.com/" className="partner-widget-item" target="_blank">
            <img src="images/partners/getreceipthero.png" alt="getreceipthero" />
          </a>
          <a href="https://www.wapice.com/" className="partner-widget-item" target="_blank">
            <img src="images/partners/wapice.png" alt="wapice" />
          </a>
          <a href="https://www.m-files.com/" className="partner-widget-item" target="_blank">
            <img src="images/partners/m-files.png" alt="m-files" />
          </a>
        </div>

      </div>
    </div>
  );
}
