import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type TFooterSection =
  | {
      title: string;
      type: "text";
      links: string[];
    }
  | {
      title: string;
      type: "contacts";
      links: {
        id: string;
        icon: IconComponent;
        text: string;
      }[];
    }
  | {
      title: string;
      type: "social";
      links: {
        id: string;
        icon: IconComponent;
      }[];
    };
