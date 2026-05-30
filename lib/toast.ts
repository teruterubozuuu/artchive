import { toast as sonnerToast } from "sonner";

export const toast = {
  // Success Toast
  success: (message: string) => {
    return sonnerToast.success(message, {
      style: {
        "--normal-bg":
          "color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))",
        "--normal-text":
          "light-dark(var(--color-green-600), var(--color-green-400))",
        "--normal-border":
          "light-dark(var(--color-green-600), var(--color-green-400))",
      } as React.CSSProperties,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
      position: "top-center",
    });
  },
  error: (message: string) => {
    return sonnerToast.error(message, {
      style: {
        "--normal-bg":
          "color-mix(in oklab, light-dark(var(--color-amber-600), var(--color-amber-400)) 10%, var(--background))",
        "--normal-text":
          "light-dark(var(--color-amber-600), var(--color-amber-400))",
        "--normal-border":
          "light-dark(var(--color-amber-600), var(--color-amber-400))",
      } as React.CSSProperties,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
      position: "top-center",
    });
  },
  warning: (message: string) => {
    return sonnerToast.warning(message, {
      style: {
        "--normal-bg":
          "color-mix(in oklab, var(--destructive) 10%, var(--background))",
        "--normal-text": "var(--destructive)",
        "--normal-border": "var(--destructive)",
      } as React.CSSProperties,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
      position: "top-center",
    });
  },
  info: (message: string) => {
    return sonnerToast.info(message, {
      style: {
        "--normal-bg":
          "color-mix(in oklab, light-dark(var(--color-sky-600), var(--color-sky-400)) 10%, var(--background))",
        "--normal-text":
          "light-dark(var(--color-sky-600), var(--color-sky-400))",
        "--normal-border":
          "light-dark(var(--color-sky-600), var(--color-sky-400))",
      } as React.CSSProperties,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
      position: "top-center",
    });
  },
};
