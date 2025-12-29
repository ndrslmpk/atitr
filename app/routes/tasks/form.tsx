import { Form } from "react-router";

export function action() {}

export default function Component() {
  return (
    <div>
      <Form action="/tasks" method="post">
        <input type="text" name="title" placeholder="title" />
        {/* <button></button> */}
      </Form>
    </div>
  );
}
