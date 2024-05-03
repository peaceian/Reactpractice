import { Outlet,Link } from "react-router-dom";

/* "Layout Route" is a shared component, inserting common content on all page, such as a navigation menu.
Layout Route 插入所有頁面，作為一個navigation。*/ 



const Layout = () =>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default Layout;
/*
Layout Component具有<Outlet>和<Link>elements。
表現<Outlet>目前選擇的路線。<Link>用於設定URL並追蹤瀏覽紀錄。
每當連結到內部路徑時，都會使用<Link>連結<a href="">。
*/