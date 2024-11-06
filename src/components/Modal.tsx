/** @jsxImportSource @emotion/react */
import { modalStyle } from "./Modal.style.ts";
import doneIcon from "../assets/Done_round.svg";

interface ModalProps {
  openModal: boolean;
  logoSrc: string;
  setOpenModal: (e: boolean) => void;
  setBoardName: (e: string) => void;
  boardLogos: string[];
  handleChooseLogo: (e: string) => void;
  handleCreateNewBoard: () => void;
  boardName: string;
}

export const Modal = ({
  openModal,
  setOpenModal,
  boardLogos,
  handleChooseLogo,
  setBoardName,
  logoSrc,
  handleCreateNewBoard,
  boardName,
}: ModalProps) => {
  return (
    <div css={[modalStyle.modalBackground, openModal && modalStyle.active]}>
      <div css={modalStyle.modalContainer}>
        <h1 css={modalStyle.title}>New board</h1>
        <div css={modalStyle.body}>
          <label>Board name</label>
          <input
            type={"text"}
            placeholder={"e.g: Default Board"}
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </div>
        <div css={modalStyle.listLogo}>
          <span>Logo</span>
          <div css={modalStyle.logoItem}>
            {boardLogos.map((item) => (
              <button
                key={item}
                onClick={() => handleChooseLogo(item)}
                css={[
                  modalStyle.buttonIcon,
                  logoSrc === item && modalStyle.activeHover,
                ]}
              >
                <img src={item} alt={"icon"} />
              </button>
            ))}
          </div>
        </div>
        <div css={modalStyle.footer}>
          <button
            css={[modalStyle.btn, modalStyle.create]}
            onClick={handleCreateNewBoard}
          >
            Create board
            <img src={doneIcon} alt={"doneIcon"} />
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            css={[modalStyle.btn, modalStyle.cancel]}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
