import { createEmptyTask, getTasks } from "../../data";
import type { Route } from "./+types/index";
import { Form, NavLink } from "react-router";

export async function clientLoader() {
  let tasks = await getTasks();

  return { tasks };
}

export async function clientAction({ request }: Route.ActionArgs) {
  return createEmptyTask();
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { tasks } = loaderData;
  return (
    <div>
      <div className="flex">
        <h1>Tasks</h1>
        <Form method="post">
          <button onClick={() => createEmptyTask()} type="submit">
            New
          </button>
        </Form>
      </div>
      <ul>
        {loaderData.tasks.map((task) => {
          return (
            <li key={task.id}>
              <span className="font-black">{task.id}</span> {task.title}{" "}
              {task.createdAt}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
