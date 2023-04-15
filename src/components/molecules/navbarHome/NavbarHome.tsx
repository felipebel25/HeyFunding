import { Box, Button } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesNavBarHome"

export const NavbarHome = () => {
    return (
        <Box sx={styles.header}>
            <Box sx={styles.containerImage}>
                <Image
                    alt="Empresas"
                    style={{ width: "100%", height: "100%" }}
                    quality={100}
                    src='/images/hf_small.png'
                    width={40}
                    height={40}
                    layout="responsive"
                />
            </Box>
            <Button sx={styles.button}>
                Empezar
            </Button>
        </Box>
    )
}
