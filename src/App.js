import React from "react";
import "./index.css"

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HugoTable } from "./components/HugoTable"
// import { Radio } from "./components/Radio"
import { ProductEditor } from "./components/ProductEditor";
//import { Link, Outlet } from "react-router-dom";


export default function App() {
  return (
    // <BrowserRouter>
    //   <main>
    //     <nav>
    //       <ul>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/table">Table</a></li>
    //         <li><a href="/form">Form</a></li>
    //         <li><a href="/dynaform">Form</a></li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //     <Route exact path="/" element={<Home />} />
    //       <Route exact path="/table" element={<HugoTable />} />
    //       <Route exact path="/form" element={<Radio />} />
    //       <Route exact path="/dynaform" element={<DynamicForm formData={formData} onSubmit="" />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    <ProductEditor />
  );
}

// function Home() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }