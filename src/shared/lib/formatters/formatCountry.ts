const regionNames = new Intl.DisplayNames(["ru"], { type: "region" });

export const formatCountry = (code?: string, fallback?: string): string => {
  if (!code) {
    return fallback ?? "";
  }

  return regionNames.of(code) ?? fallback ?? "";
};
