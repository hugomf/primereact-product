import React from "react";
import "./index.css"
import {QueryClient,QueryClientProvider } from 'react-query'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HugoTable } from "./components/HugoTable"
// import { Radio } from "./components/Radio"
import { MyTable } from "./components/MyTable";
//import { Link, Outlet } from "react-router-dom";

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }
);

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
    <QueryClientProvider client={queryClient}>
      <MyTable />
    </QueryClientProvider>
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