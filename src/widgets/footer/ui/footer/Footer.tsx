import type { FC } from "react";
import styles from "./Footer.module.css";
import { Logo } from "@/shared/ui/logo";
import { FooterNavigation } from "../navigation";
import { Text } from "@/shared/ui/text";

export const Footer: FC = () => {
  return (
    <>
      <div className={styles.footer}>
        <Logo></Logo>
        <FooterNavigation></FooterNavigation>
      </div>
      <Text tag="span" size="md" weight="regular" color="disabled">
        © КиноДом 2020
      </Text>
    </>
  );
};
