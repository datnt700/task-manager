/** @jsxImportSource @emotion/react */
import { GlobalStyles } from "./styles/Global.style.tsx";
import { SideBar } from "./layout/SideBar.tsx";
import { useState } from "react";
import { Modal } from "./components/Modal.tsx";
import { appStyle } from "./App.style.ts";
import { boardData } from "./constants";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [boardName, setBoardName] = useState("");
  const [logoSrc, setLogoSrc] = useState("");
  const [board, setBoard] = useState(boardData);

  const boardLogos = Array.from(
    { length: 13 },
    (_, i) => `/src/assets/board-logo-${String(i + 1).padStart(2, "0")}.svg`,
  );

  const openNewBoard = () => {
    setOpenModal(true);
  };

  const handleChooseLogo = (e: string) => {
    setLogoSrc(e);
  };

  const handleCreateNewBoard = () => {
    const newBoard = {
      id: board.length > 0 ? board[board.length - 1].id + 1 : 1,
      boardName: boardName,
      logo: logoSrc,
    };
    setBoard([...board, newBoard]);
    setBoardName("");
    setLogoSrc("");
    setOpenModal(false);
  };

  return (
    <>
      <GlobalStyles />
      <div css={[appStyle.container, openModal && appStyle.activeBlur]}>
        <SideBar board={board} openNewBoard={openNewBoard} />
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        boardLogos={boardLogos}
        setBoardName={setBoardName}
        handleChooseLogo={handleChooseLogo}
        logoSrc={logoSrc}
        handleCreateNewBoard={handleCreateNewBoard}
        boardName={boardName}
      />
    </>
  );
}

export default App;
