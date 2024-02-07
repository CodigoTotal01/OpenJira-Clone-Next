import { Box } from "@mui/material"
import Head from "next/head"
import { FC } from "react"
import { NavBar, Sidebar } from "../ui"



interface Props {
    title?: string,
    children: React.ReactNode
}
// sx - Personlizar y acceso al theme de Material-UI
export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{
            flexGrow: 1, // Crecer en el espacio disponible 
        }}>

            <Head>
                <title>{title}</title>
            </Head>


            <NavBar />
            <Sidebar />

            <Box sx={{
                padding: '10px 20px', // Crecer en el espacio disponible 
            }}>
            </Box>
        </Box>
    )
}