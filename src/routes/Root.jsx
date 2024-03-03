import { Link, Outlet } from "react-router-dom";

const Root = ({ }) => {

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            aria-label="search contact"
                            placeholder="Search"
                            type="search"
                            id="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        ></div>
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="contact/1">Your name</Link>
                        </li>
                        <li>
                            <Link to="contacts/2">Your friend</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Root;