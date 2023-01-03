import React from "react";
import "./index.css"
import {QueryClient,QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Comment } from "./components/Comment";
import { Analytics } from "./components/Analytics";
import { Sidebar } from "./components/Sidebar";
import './Content.css';

import { Product } from "./components/Product";
import { User } from "./components/User";

// import { HugoTable } from "./components/HugoTable"
// import { Radio } from "./components/Radio"
//import { MyTable } from "./components/MyTable";
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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/productList" element={<Product />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
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