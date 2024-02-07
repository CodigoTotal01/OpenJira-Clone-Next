import { Layout } from "@/components/layouts";
import { Typography } from "@mui/material";

// Este archivo es la página principal o de inicio de tu aplicación.
export default function Home() {
  return (
    <Layout >
      <Typography variant="h1" color="primary">
        Hola mundo
      </Typography>
    </Layout>
  )
}
