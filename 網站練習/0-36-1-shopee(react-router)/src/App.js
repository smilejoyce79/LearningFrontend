
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// 網址路徑表達法: BrowserRouter(斜線) vs HashRouter(井字號)
// Switch(交換器)已改Routes(路由器): 若無此路徑,引導至404錯訊頁面
// Route: 分頁用
// Link: 跳頁用
// Redirect已改Navigate: 重新導向跳轉至指定路徑
import HomePage from './pages/HomePage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ScrollToTop from "./components/common/SrollToTop";
import { AuthProvider } from "./components/auth/AuthContext";
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <AuthProvider> {/*註3*/}
      <BrowserRouter>
        <ScrollToTop/> {/*使router跳轉後的頁面,不會停在頁面中間,而是回到最頂端 */}
        <Routes>
          <Route exact path='/' element={<Navigate to="/mall" />} />
          <Route exact path='/mall' element={<HomePage />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/mall/:categaryName' element={<ProductCollectionPage />} />
          {/* :____ 代表可以彈性定義,在瀏覽器可測試網址輸入... /mall/123 */}
          <Route exact path='/:productName' element={<ProductPage />} />
          {/* 在瀏覽器可測試網址輸入... /123 */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;