import { 
    Link, 
    Outlet, 
    useLoaderData, 
    Form, 
    redirect,
    NavLink 

  } from "react-router-dom";
import { getContacts, createContact } from "../contact";

export async function loader() {
    console.log('entrou na funcao loader ')
  const contacts = await getContacts();
  return { contacts };

}

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
   // return { contact };
}

export default function Root() {
    //Pego os dados de loader, mas este loader que está como funcao export de loader de root mesmo. 
    const { contacts } = useLoaderData();
    console.log('contactsss ')
    console.log(contacts)
 

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
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
            
            <Form method="POST">
                <button type="submit"> New </button>
            </Form>
npm 
          </div>
          <nav>
           {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                    {/* other code */}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail">
            <Outlet /> 
        </div>
      </>
    );
  }