import type { FC } from "react";

import clsx from "clsx";

import Close from "@/shared/assets/icons/close.svg?react";
import { Button } from "@/shared/ui/button";

import { useReviewEditor } from "../model/useReviewEditor";
import { ReviewEditor } from "./ReviewEditor";
import { ReviewPreview } from "./ReviewPreview";

import styles from "./ReviewCreateForm.module.css";

type Props = {
  movieId: number;
  onClose: () => void;
};

export const ReviewCreateForm: FC<Props> = ({ onClose }) => {
  const { text, setText, html } = useReviewEditor();

  return (
    <div className={clsx(styles.form)}>
      <Button
        variant="only-icon"
        onClick={onClose}
      >
        <Close />
      </Button>

      <ReviewEditor
        value={text}
        onChange={setText}
      />

      <ReviewPreview html={html} />
    </div>
  );
};
