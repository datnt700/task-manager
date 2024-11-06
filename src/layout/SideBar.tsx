/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import menu from "../assets/Menu.svg";
import closeRound from "../assets/Close_Round.svg";
import addButton from "../assets/Add_round_fill.svg";
import { ButtonIcon } from "../components/ButtonIcon.tsx";
import { sideBarStyle } from "./SideBar.style.ts";
import { Board } from "../interfaces";

interface SideBarProps {
  openNewBoard: () => void;
  board: Board[];
}

export const SideBar = ({ openNewBoard, board }: SideBarProps) => {
  const [isActiveSideBar, setIsActiveSideBar] = useState(false);
  const toggleSideBar = () => {
    setIsActiveSideBar((prev) => !prev);
  };

  const renderBoardButtons = useCallback(
    () =>
      board.map((item) => (
        <ButtonIcon
          onClick={openNewBoard}
          src={item.logo}
          text={isActiveSideBar ? item.boardName : ""}
          key={item.id}
        />
      )),
    [board, openNewBoard, isActiveSideBar],
  );

  return (
    <>
      <div css={sideBarStyle.container}>
        <div
          css={[
            sideBarStyle.sideBarOpen,
            isActiveSideBar && sideBarStyle.active,
          ]}
        >
          <ButtonIcon onClick={toggleSideBar} src={closeRound} text={""} />
          {renderBoardButtons()}
          <ButtonIcon
            onClick={openNewBoard}
            src={addButton}
            text={"Add new board"}
          />
        </div>
      </div>

      <div css={sideBarStyle.sideBarClose}>
        <ButtonIcon onClick={toggleSideBar} src={menu} text={""} />
        {renderBoardButtons()}
        <ButtonIcon onClick={openNewBoard} src={addButton} text={""} />
      </div>
    </>
  );
};
