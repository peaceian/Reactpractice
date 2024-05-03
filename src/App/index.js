// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Blog from './Blog';
import Contact from "./Contact";
import NoPage from "./NoPage";
import Layout from "./Layout";

function Page(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />}/>
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

export default Page;
// const root = ReactDOM.createRoot(document.getElementById('rock'));
// root.render(<Page />)
/*<BrowserRouter>包住contents
<Routes>可以有多個<Routes>
<Route>可以被nested，第一個<Route>具有路徑"/"和渲染Layout元件。
巢狀的<Route>繼承並加入到父路由。該blogs路徑與父路徑組合並成為"/blogs" 
Home components Route 沒有路徑，但有index屬性，指定路由為父路由的預設路由，即"/"
設定path到*將作為任何未定義URL的抓獲，對404頁面非常有用
*/

/* <BrowserRouter><Routes><Route>*/

/*BrowserRouter的路徑格式：mypage.com/home
建立在 HTML history API之上，顯示的url簡潔。
*網站上線後，需要有後端配合，接受瀏覽器向這個ur發出的請求，不然會造成連線錯誤。

HashRouter的路徑格式：mypage.com/#/home
使用 hash url ，也是就 # 來控制url，瀏覽器不會對的url作出請求。
*/