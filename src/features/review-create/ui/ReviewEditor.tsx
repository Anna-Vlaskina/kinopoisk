import type { FC } from "react";

import clsx from "clsx";

import styles from "./ReviewEditor.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const ReviewEditor: FC<Props> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Напишите рецензию..."
      rows={10}
      className={clsx(styles.editor)}
    />
  );
};
