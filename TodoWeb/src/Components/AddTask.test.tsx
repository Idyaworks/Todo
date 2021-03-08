import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

test("renders Add Task", () => {
  const addItem = jest.fn();
  const addTask = render(<AddTask addTask={addItem} />);
  const input = addTask.getByTestId("addTaskText");
  let newItem = "New Reminder";
  fireEvent.change(input, { target: { value: newItem } });

  fireEvent.click(screen.getByText("Add Task"));
  expect(addItem).toBeCalledWith({
    description: "New Reminder",
    status: 1,
    title: "New",
  });
  expect(addItem).toHaveBeenCalledTimes(1);
});
