import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ------ 使router跳轉後的頁面,不會停在頁面中間,而是回到最頂端 ------
// React Router手冊中copy來的Code,判斷pathname若有改變,就移動到(x,y)軸=(0,0)的位置
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* 也可寫成:

const ScrollToTop =()=> {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
};
export default ScrollTotop; 

*/