import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

import Store from "./Pages/Store";
import CartProvider from "./store/CartProvider";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LayOut from "./components/Layouts/LayOut";

// const routerDefine = createRoutesFromElements(
//   <Route>
//     <Route path='/Store' element={<Store/>}/>
//     <Route path='/Home' element={<Home/>}/>
//     <Route path='/About' element={<About/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routerDefine)

// const router = createBrowserRouter([
//   {path:'/Store', element:<Store/>},
//   {path:'/Home', element:<Home/>},
//   {path:'/About', element:<About/>}
// ])

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="/" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
