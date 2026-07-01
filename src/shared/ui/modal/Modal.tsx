import { type FC, useEffect, useRef } from "react";

import clsx from "clsx";

import type { ModalProps } from "./Modal.types";

import styles from "./Modal.module.css";

export const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen,
    onClose,
    children,
    closeOnBackdropClick = true,
    closeOnEscape = true,
    lockScroll = true,
    className = "",
    overlayClassName = "",
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      if (lockScroll) {
        document.body.style.overflow = "hidden";
      }

      if (closeOnEscape) {
        document.addEventListener("keydown", handleEscape);
      }

      previousActiveElement.current = document.activeElement;
      modalRef.current?.focus();
    }

    return () => {
      if (lockScroll) {
        document.body.style.overflow = "unset";
      }

      if (closeOnEscape) {
        document.removeEventListener("keydown", handleEscape);
      }

      (previousActiveElement.current as HTMLElement)?.focus();
    };
  }, [isOpen, onClose, lockScroll, closeOnEscape]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={clsx(styles.overlay, isOpen && styles.open, overlayClassName)}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={clsx(styles.modal, className)}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
};
