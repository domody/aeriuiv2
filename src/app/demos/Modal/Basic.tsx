import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalAction,
} from "aeriui/Modal";
import { Button } from "aeriui/Button";

export function ModalDemo() {
  return (
    <Modal>
      <ModalTrigger>
        <Button variant="secondary">Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>Revoke Access</ModalHeader>
        <ModalBody>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </ModalBody>
        <ModalFooter>
          <ModalAction>
            <Button variant="secondary">Cancel</Button>
          </ModalAction>
          <ModalAction>
            <Button variant="destructive">Revoke Access</Button>
          </ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
