import { Input } from "@ui/input";

interface ToDoListInputProps {
  newTask: string;
  setNewTask: (value: string) => void;
  onAddTask: () => void;
}

export default function ToDoListInput({
  newTask,
  setNewTask,
  onAddTask,
}: ToDoListInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddTask();
    }
  };

  return (
    <Input
      type="text"
      placeholder="Adaugă o nouă sarcină"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      onKeyDown={handleKeyDown}
      className="flex-grow"
    />
  );
}
