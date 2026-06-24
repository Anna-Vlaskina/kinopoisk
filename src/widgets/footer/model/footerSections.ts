import FacebookIcon from "@/shared/assets/icons/facebook.svg?react";
import VkIcon from "@/shared/assets/icons/vk.svg?react";
import InstagramIcon from "@/shared/assets/icons/instagram.svg?react";
import TelephoneIcon from "@/shared/assets/icons/telephone.svg?react";
import MailIcon from "@/shared/assets/icons/mail.svg?react";

import type { TFooterSection } from "./footerSections.types";

export const footerSections: TFooterSection[] = [
  {
    title: "Меню",
    type: "text",
    links: ["Фильмы", "Сериалы", "Подборки"],
  },
  {
    title: "Подписка",
    type: "text",
    links: ["Тарифный план", "Акции", "Подписка за баллы"],
  },
  {
    title: "Кино и сериалы",
    type: "text",
    links: ["Весь каталог", "Комедии", "Драмы", "Фэнтези", "Триллеры", "Детективы"],
  },
  {
    title: "Сотрудничество",
    type: "text",
    links: [
      "Размещение рекламы",
      "Партнерам",
      "Партнерская программа",
      "Пользовательское соглашение",
      "Политика конфиденциальности",
    ],
  },
  {
    title: "Вопросы и ответы",
    type: "text",
    links: [],
  },
  {
    title: "Техническая поддержка",
    type: "contacts",
    links: [
      {
        id: "phone",
        icon: TelephoneIcon,
        text: "8 800 800 80 80",
      },
      {
        id: "mail",
        icon: MailIcon,
        text: "support@mail.ru",
      },
    ],
  },
  {
    title: "Подписывайтесь на нас",
    type: "social",
    links: [
      {
        id: "facebook",
        icon: FacebookIcon,
      },
      {
        id: "vk",
        icon: VkIcon,
      },
      {
        id: "instagram",
        icon: InstagramIcon,
      },
    ],
  },
] as const;
