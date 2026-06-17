import type { FC } from "react";

import clsx from "clsx";

import { Logo } from "@/shared/ui/logo";
import { Text } from "@/shared/ui/text";

import { FooterNavigation } from "../navigation";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <>
      <div className={clsx(styles.footer)}>
        <Logo></Logo>
        <FooterNavigation></FooterNavigation>
      </div>
      <Text
        tag="span"
        size="md"
        weight="regular"
        color="disabled"
      >
        © КиноДом 2020
      </Text>
    </>
  );
};
