import type { FC } from "react";

import clsx from "clsx";

import { Text } from "@/shared/ui/text/Text";

import { footerSections } from "../../model/footerSections";

import styles from "./FooterNavigation.module.css";

export const FooterNavigation: FC = () => {
  return (
    <nav className={clsx(styles.navigation)}>
      {footerSections.map((section) => (
        <div
          key={section.title}
          className={clsx(styles.section)}
        >
          <Text
            tag="h4"
            size="md"
            weight="semibold"
          >
            {section.title}
          </Text>

          <ul className={clsx(styles.links, section.type === "social" && styles.social)}>
            {section.type === "text" &&
              section.links.map((link) => (
                <Text
                  tag="li"
                  size="md"
                  weight="medium"
                  color="tertiary"
                  key={link}
                >
                  {link}
                </Text>
              ))}

            {section.type === "contacts" &&
              section.links.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.id}
                    className={clsx(styles.contact)}
                  >
                    <Icon className={clsx(styles.icon)} />

                    <Text
                      tag="span"
                      size="md"
                      weight="medium"
                      color="tertiary"
                    >
                      {item.text}
                    </Text>
                  </li>
                );
              })}

            {section.type === "social" &&
              section.links.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.id}
                    className={clsx(styles.social)}
                  >
                    <Icon className={clsx(styles.icon)} />
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </nav>
  );
};
