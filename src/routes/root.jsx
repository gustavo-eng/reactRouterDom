import { Outlet, Link  } from "react-router-dom";
import { getContacts } from "../contact";


export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}


export default function Root() {

    return (
        <>
            <div id="sidebar">
                <h1> React Router Contacts </h1>
                <div>
                    <form id="search-form" role="search">
                        <input 

                            id="q"
                            type="search" 
                            aria-label="Search contacts"
                            placeholder="Search"
                            name="q"

                        />
                        <div 
                              id="search-spinner"
                              aria-hidden
                              hidden={true}
                        />
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
                            <a href={`/contacts/1`}>Your Name</a>
                            <Link to={`contacts/1`}>Your Link </Link>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Your Friend</a>
                            <Link to={`contacts/2`}>Your Friend22</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                 <Outlet /> 
            </div>
        </>
    );

};