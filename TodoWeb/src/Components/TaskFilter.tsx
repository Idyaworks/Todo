import { Checkbox, CheckboxOptionType } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Filters, TaskStatus } from "../Types";

interface taskFilterProps {
  applyFilters: (filter: CheckboxValueType[]) => void;
  filters:Filters
}

const TaskFilter = (filters: taskFilterProps) => {


  const options : CheckboxOptionType[] = [
    { label: "Completed", value: TaskStatus.Completed },
    { label: "New", value: TaskStatus.New },
  ];
  return (
    <Checkbox.Group
      options={options}
      defaultValue={filters.filters.status}
      onChange={filters.applyFilters}
    />
  );
};

export default TaskFilter;
