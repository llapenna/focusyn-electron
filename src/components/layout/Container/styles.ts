import { cva } from "@/reactapp/styled/css";

export const container = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "sm",

    padding: "sm",

    borderWidth: "1px",
    borderColor: "overlayBorder",
    borderStyle: "solid",
    borderRadius: "md",

    backgroundColor: "overlay",
  },
});
