import type { FC } from "react";

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
    />
  );
};
