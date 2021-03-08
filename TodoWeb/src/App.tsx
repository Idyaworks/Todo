import React, { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTasks from "./Components/ListTasks";
import TaskFilter from "./Components/TaskFilter";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Filters, Task, TaskStatus } from "./Types";
import axios from "axios";

const App = () => {
  const instance = axios.create({
    baseURL: "http://localhost:59453/api/TodoItems/",
    timeout: 1000,
  });
  const [getTasks, setTasks] = useState<Task[]>([]);
  const [getFilters, setFilters] = useState<Filters>({status:[TaskStatus.Completed, TaskStatus.New]});

  const loadTasks = (): void => {
    instance
      .get("/filters", {
        params: getFilters,
      })
      .then(function (response: any) {
        console.log(response);
        setTasks(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const addTask = (task: Task) => {
    instance
      .post("/", task)
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(() => loadTasks());
  };

  const applyFilter = (filter: CheckboxValueType[]) => {
    var newFilters = getFilters;
    newFilters.status = filter as TaskStatus[];
    setFilters( newFilters);
    loadTasks();
  };

  const markCompleted = (task: Task) => {
    task.status = TaskStatus.Completed;
    task.date = new Date();
    instance
      .put(`/${task.id}`, task)
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(() => loadTasks());
  };
  
  useEffect(() => {
    loadTasks();
  },[]);

  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskFilter applyFilters={applyFilter} filters={getFilters} />
      <ListTasks tasks={getTasks} markCompleted={markCompleted} />
    </div>
  );
};

export default App;
