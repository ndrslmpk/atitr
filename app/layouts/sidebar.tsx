import { Form, Link, NavLink, Outlet, useNavigation } from "react-router";
import type { Route } from "./+types/sidebar";

import { createEmptyContact, getContacts } from "../data";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts };
}

export default function Sidebar({ loaderData }: Route.ComponentProps) {
  const { contacts } = loaderData;
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>
          <Link to="product">Atitr Time Tracking</Link>
        </h1>
        <div>
          <Form id="search-form" role="search">
            <input
              aria-label="Search contacts"
              id="q"
              name="q"
              placeholder="Search"
              type="search"
            />
            <div aria-hidden hidden={true} id="search-spinner" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1-0`}>
                Your Name<span className="linktype ssr">server</span>
              </a>
            </li>
            <li>
              <a href={`/contacts/2-0`}>
                Your Friend <span className="linktype ssr">server</span>
              </a>
            </li>
            <li>
              <Link to="/contacts/3-0">
                Your Next Best Client Friend{" "}
                <span className="linktype client">client</span>
              </Link>
            </li>
            <li>
              <hr />
            </li>
          </ul>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                    to={`contacts/${contact.id}`}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {contact.favorite ? <span>*</span> : null}
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
      <div
        className={navigation.state === "loading" ? "loading" : ""}
        id="detail"
      >
        {/* TO be refactored into an own component */}
        <div id="HeaderMenu">
          <Link to="/product">Product</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
