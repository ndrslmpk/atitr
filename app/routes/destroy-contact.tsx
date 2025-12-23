import { redirect, type RouteObject, type RouteProps } from "react-router";
import type { Route } from "../+types/root";

import { deleteContact } from "../data";

export async function action({ params }: Route.ActionArgs) {
  const contactId = params.contactId;
  if (!contactId) {
    throw new Response("Contact ID required", { status: 400 });
  }
  await deleteContact(contactId);
  return redirect(`/`);
}
