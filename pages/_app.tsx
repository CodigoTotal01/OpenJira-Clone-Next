import { EntriesProvider } from "@/context/entries";
import { UIProvider } from "@/context/ui";
import "@/styles/globals.css";
import { lightTheme, darkTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

// Contenedor -> agregar estilos globales, incluir componentes de navegación o realizar cualquier otra configuración que necesites aplicar a todas las páginas de tu aplicación
export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}
