import { Outlet } from "react-router-dom";
import MainMenu from "../MainMenu";
import Footer from "../Footer";
export default function Layout() {
    return (
        <>
            <header>
                <MainMenu/>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}