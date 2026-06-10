import { useState } from "react";
import clsx from "clsx";
import type { CardRowProps } from "./CardRow.types";
import styles from "./CardRow.module.css";

export const CardRow = <T,>(props: CardRowProps<T>) => {
  const { items, getKey, renderItem, visibleCount = 4 } = props;

  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((current) => Math.max(current - visibleCount, 0));
  };

  const next = () => {
    setStartIndex((current) =>
      current + visibleCount >= items.length ? current : current + visibleCount,
    );
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className={clsx(styles.root)}>
      <button
        className={clsx(styles.prev)}
        onClick={prev}
      >
        ←
      </button>

      <div className={clsx(styles.container)}>
        {visibleItems.map((item) => (
          <div key={getKey(item)}>{renderItem(item)}</div>
        ))}
      </div>

      <button
        className={clsx(styles.next)}
        onClick={next}
      >
        →
      </button>
    </div>
  );
};
