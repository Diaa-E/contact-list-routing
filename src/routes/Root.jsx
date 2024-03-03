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
                            <a href="contact/1">Your name</a>
                        </li>
                        <li>
                            <a href="contacts/2">Your friend</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}

export default Root;