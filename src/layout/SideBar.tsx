/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import menu from "../assets/Menu.svg";
import closeRound from "../assets/Close_Round.svg";
import addButton from "../assets/Add_round_fill.svg";
import { Button } from "../components/Button.tsx";
import { sideBarStyle } from "./SideBar.style.ts";
import { Board } from "../types";

interface SideBarProps {
  openNewBoard: () => void;
  board: Board[];
}

export const SideBar = ({ openNewBoard, board }: SideBarProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const renderBoardButtons = useCallback(
    () =>
      board.map((item) => (
        <Button
          onClick={openNewBoard}
          icon={item.logo}
          text={isSideBarOpen ? item.boardName : ""}
          key={item.id}
        />
      )),
    [board, openNewBoard, isSideBarOpen],
  );

  return (
    <>
      <div css={sideBarStyle.container}>
        <div
          css={[sideBarStyle.sideBarOpen, isSideBarOpen && sideBarStyle.active]}
        >
          <Button onClick={toggleSideBar} icon={closeRound} text={""} />
          {renderBoardButtons()}
          <Button
            onClick={openNewBoard}
            icon={addButton}
            text={"Add new board"}
          />
        </div>
      </div>

      <div css={sideBarStyle.sideBarClose}>
        <Button onClick={toggleSideBar} icon={menu} text={""} />
        {renderBoardButtons()}
        <Button onClick={openNewBoard} icon={addButton} text={""} />
      </div>
    </>
  );
};
