import type { FC } from "react";
import { footerSections } from "../../model/footerSections";
import Text from "@/shared/ui/text/Text";
import styles from "./FooterNavigation.module.css";

const FooterNavigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      {footerSections.map((section) => (
        <div key={section.title} className={styles.section}>
          <Text tag="h4" size="md" weight="semibold">
            {section.title}
          </Text>

          <ul className={section.type === "social" ? styles.social : styles.links}>
            {section.type === "text" &&
              section.links.map((link) => (
                <Text tag="li" size="md" weight="medium" color="tertiary" key={link}>
                  {link}
                </Text>
              ))}

            {section.type === "contacts" &&
              section.links.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id} className={styles.contact}>
                    <Icon className={styles.icon} />

                    <Text tag="span" size="md" weight="medium" color="tertiary">
                      {item.text}
                    </Text>
                  </li>
                );
              })}

            {section.type === "social" &&
              section.links.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.id} className={styles.social}>
                    <Icon className={styles.icon} />
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNavigation;
