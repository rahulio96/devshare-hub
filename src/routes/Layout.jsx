import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

function Layout() {
    const [search, setSearch] = useState('')

    return (
        <>
            <Navbar setSearch={setSearch}/>
            <Outlet context={[search, setSearch]}/>
        </>
    )
}

export default Layout