import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title || "Loading..."} / Cinema Warehouse`;
  }, [title]);
  return null;
};
