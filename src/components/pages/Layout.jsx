import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <header>
                <nav>hiển thị menu dọc ở đây</nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}