import React, { useState } from "react";
import { Input, Space } from 'antd';
import {TaskStatus, Task} from '../Types'

interface addTaskProps{
    addTask: (task:Task) => void
}

const AddTask= (addTask: addTaskProps) => {
  const [getTask, setTask] = useState<string | undefined>();
  const { Search } = Input;
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="Add Task"
          data-testid="addTaskText"
          value={getTask}
          onChange={(e) => setTask(e.target.value)}
          enterButton="Add Task"
          onSearch={() => {
            getTask !== undefined &&
              addTask.addTask({
                status: TaskStatus.New,
                description: getTask,
                title: getTask.split(" ")[0]
              });
            setTask(undefined);
          }}
        />
      </Space>
    </div>
  );
};

export default AddTask;