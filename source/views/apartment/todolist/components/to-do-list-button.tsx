import { Button } from "@ui/button";

interface ToDoListButtonProps {
  onAddTask: () => void;
}

export default function ToDoListButton({ onAddTask }: ToDoListButtonProps) {
  return <Button onClick={onAddTask}>Add Task</Button>;
}
