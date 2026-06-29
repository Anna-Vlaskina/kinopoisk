import type { FC } from "react";

import clsx from "clsx";

import Close from "@/shared/assets/icons/close.svg?react";
import { Button } from "@/shared/ui/button";

import styles from "./MovieSearchInput.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
};

export const MovieSearchInput: FC<Props> = (props) => {
  const { value, onChange, onClear } = props;

  return (
    <div className={clsx(styles.container)}>
      <input
        autoFocus
        type="text"
        placeholder="Название фильма"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={clsx(styles.input)}
      />

      {onClear && (
        <Button
          variant="only-icon"
          type="button"
          className={clsx(styles.clear)}
          onClick={onClear}
        >
          <Close />
        </Button>
      )}
    </div>
  );
};
