const READABLE_TITLE_REGEX = /[A-Za-zА-Яа-яЁё]/;

export const hasReadableTitle = (title: string): boolean => {
  return READABLE_TITLE_REGEX.test(title);
};
