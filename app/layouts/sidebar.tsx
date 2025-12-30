import {
  Form,
  Link,
  NavLink,
  Outlet,
  useNavigation,
  useSubmit,
} from "react-router";
import type { Route } from "./+types/sidebar";

import { createEmptyContact, getContacts } from "../data";
import { useEffect, useState } from "react";
import HeaderMenu from "./headerMenu";
import ContactsSidebarLayout from "./contacts/layout";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function SidebarLayout(props: Route.ComponentProps) {
  const { loaderData } = props;

  const { contacts, q } = loaderData;
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <>
      <ContactsSidebarLayout {...props} />
      <div
        className={
          navigation.state === "loading" && !searching ? "loading" : ""
        }
        id="detail"
      >
        <Outlet />
      </div>
    </>
  );
}
