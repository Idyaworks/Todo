import React from "react";
import { List, Button } from "antd";
import {
  CheckCircleTwoTone,
  PlusCircleTwoTone,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";
import { TaskStatus, Task } from "../Types";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

interface ListTasksProps {
  tasks: Task[];
  markCompleted: (task: Task) => void;
}

const taskStatusIcon = (status: TaskStatus): AntdIconProps => {
  switch (status) {
    case TaskStatus.New:
      return <PlusCircleTwoTone twoToneColor="#eb2f96" />;
    case TaskStatus.Completed:
      return <CheckCircleTwoTone twoToneColor="#52c41a" />;

    default:
      return <ExclamationCircleTwoTone />;
  }
};

const ListTasks = (tasks: ListTasksProps) => {
  return (
    <div className="ListTasks">
      <List
        header={`Tasks List - ${tasks.tasks.length}`}
        bordered
        dataSource={tasks.tasks}
        renderItem={(item: Task) => (
          <List.Item
            actions={[
              <Button
                disabled={item.status === TaskStatus.Completed}
                type="link"
                size={"small"}
                onClick={() => tasks.markCompleted(item)}
              >
                done
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={taskStatusIcon(item.status)}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListTasks;
