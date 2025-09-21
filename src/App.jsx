import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  SideBarMenu  from './components/navigation/SideBarMenu';
import { Dashboard } from "./components/Dashboard";
import { Comment } from "./components/Comment";
import { Analytics } from "./components/Analytics";
import { VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscBeaker, VscListUnordered } from "react-icons/vsc";

  import { FaUsers } from "react-icons/fa";

  

  import { Product } from "./components/product/Product";
  import { User } from "./components/user/User";
  import {QueryClient,QueryClientProvider } from 'react-query'


function App() {

  const items = [
    {
      id: "1",
      label: "User",
      icon: FaUsers,
      url: "/user"
    },
    {
      id: "2",
      label: "Product",
      icon: VscListUnordered,
      url: "/product"
    },
    {
      id: "3",
      label: "Dashboard",
      icon: VscSourceControl,
      url: "/dashboard"
    },
    {
      id: "3",
      label: "Debug",
      icon: VscDebugAlt,
      url: ""
    },
    {
      id: "3",
      label: "Extensions",
      icon: VscExtensions,
      url: ""
    },
    {
      id: "3",
      label: "Testing",
      icon: VscBeaker,
      url: ""
    },
  ]

  const card = {
    id: "1",
    displayName: "Hugo",
    photoUrl: "https://picsum.photos/id/91/3504/2336.jpg",
    title: "None",
  }

  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }
  );

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SideBarMenu items={items} card={card} >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/user" element={<User />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </SideBarMenu>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
