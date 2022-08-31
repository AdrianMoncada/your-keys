import React, { useState, useRef, useEffect, useCallback } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {
  SearchContainerHorizontal,
  DivDatesHorizontal,
  DivInputHorizontal,
  ButtonInfoHorizontal,
  DivSvg,
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  ContainerButtonSvg,
} from "./SearchHorizontalStyles";
import DateCalendar from "../date/DateCalendar";
import Search from "../Search/Search";
import { motion, AnimatePresence } from "framer-motion";

function SearchBar() {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <SearchContainerHorizontal className="hola">
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <AnimatePresence>
            <ModalWrapper
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              showModal={showModal}
            >
              <ModalContent>
                <h2 className="titleInfos"> Recogida</h2>
                <DivInputHorizontal className="divcito">
                  <MdLocationOn className="icon" />
                  <Search />
                </DivInputHorizontal>
                <DivDatesHorizontal>
                  <DateCalendar className="dates" position="inline-flex" />
                </DivDatesHorizontal>
                <ButtonInfoHorizontal
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Encontrar Vehículo
                </ButtonInfoHorizontal>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </AnimatePresence>
        </Background>
      ) : null}

      <ContainerButtonSvg className="mama">
        <DivSvg
          animate={{
            scale: [1, 1, 1.2, 1.2, 1]
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          onClick={openModal}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: "0%",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaSearch className="iconSearch" />
          </motion.div>
        </DivSvg>
      </ContainerButtonSvg>
    </SearchContainerHorizontal>
  );
}

export default SearchBar;
