import type { FC } from "react";

type Props = {
  html: string;
};

export const ReviewPreview: FC<Props> = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
