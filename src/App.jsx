import Modal from "./Modal";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  //! set isOpen to false (Close Modal)
  const onClose = () => {
    setIsOpen(false);
  };

  //! set isOpen to true (Opem Modal)
  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <h1>React Portal</h1>

        <button onClick={onOpen}>Open Modal</button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <p>Modal Component</p>
        </Modal>
      </div>
    </>
  );
};

export default App;
