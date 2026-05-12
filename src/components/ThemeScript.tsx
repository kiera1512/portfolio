import { dataStyle, style } from "@/resources";

export function ThemeScript() {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: this inline theme bootstrap must run before hydration to avoid a flash of incorrect theme
  return (
    <script
      id="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const root = document.documentElement;
              const defaultTheme = "system";
              const config = ${JSON.stringify({
                brand: style.brand,
                accent: style.accent,
                neutral: style.neutral,
                solid: style.solid,
                "solid-style": style.solidStyle,
                border: style.border,
                surface: style.surface,
                transition: style.transition,
                scaling: style.scaling,
                "viz-style": dataStyle.variant,
              })};

              Object.entries(config).forEach(([key, value]) => {
                root.setAttribute("data-" + key, value);
              });

              const resolveTheme = (themeValue) => {
                if (!themeValue || themeValue === defaultTheme) {
                  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }
                return themeValue;
              };

              const savedTheme = localStorage.getItem("data-theme");
              root.setAttribute("data-theme", resolveTheme(savedTheme));

              Object.keys(config).forEach((key) => {
                const value = localStorage.getItem("data-" + key);
                if (value) {
                  root.setAttribute("data-" + key, value);
                }
              });
            } catch (e) {
              console.error("Failed to initialize theme:", e);
              document.documentElement.setAttribute("data-theme", "dark");
            }
          })();
        `,
      }}
    />
  );
}
