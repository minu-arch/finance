import { Button } from "@ui/button";
import { DialogFooter } from "@ui/dialog";

export default function ModalFooter({ onClose }: { onClose: () => void }) {
  return (
    <DialogFooter>
    <Button type="button" variant="outline" onClick={onClose}>
      Cancel
    </Button>
    <Button type="submit">Save changes</Button>
  </DialogFooter>
  )
}