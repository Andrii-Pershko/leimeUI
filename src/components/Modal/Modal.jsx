import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";
import { fakeDB, updateFakeBD } from "../../fakeBD/fakeBD";

export default function ModalUsage({ id, discription, link, setData }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [valueDiscription, setValueDiscription] = useState(discription);
  const [valueLink, setValueLink] = useState(link);

  const onSubmit = (e, onClose) => {
    e.preventDefault();

    const updatedData = fakeDB.map((meme) => {
      if (meme.id === id) {
        return {
          ...meme,
          discribe: valueDiscription,
          link: valueLink,
        };
      }
      return meme;
    });
    updateFakeBD(updatedData);
    setData(updatedData);
    onClose();
  };

  return (
    <>
      <Button onPress={onOpen}>Edit</Button>
      <Modal
        isOpen={isOpen}
        placement="center-center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{id}</ModalHeader>
              <ModalBody>
                <Form
                  className="w-full max-w-xs"
                  onSubmit={(e) => {
                    onSubmit(e, onClose);
                  }}
                >
                  <Input
                    value={valueLink}
                    onChange={(e) => setValueLink(e.target.value)}
                    name="link"
                  />
                  <Input
                    value={valueDiscription}
                    onChange={(e) => setValueDiscription(e.target.value)}
                    name="Description"
                  />
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
