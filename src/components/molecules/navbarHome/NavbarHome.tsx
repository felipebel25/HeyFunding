import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesNavBarHome"
import Link from "next/link"

export const NavbarHome = () => {
    return (
        <Box sx={styles.header}>
            <Box sx={styles.containerImage}>
                <Link href={'/'}>
                    <Image
                        alt="Empresas"
                        style={{ width: "100%", height: "100%" }}
                        quality={100}
                        src='/images/hf_small.png'
                        width={40}
                        height={40}
                        layout="responsive"
                    />
                </Link>
            </Box>
            <Typography sx={styles.textHF}>Hey Funding</Typography>
            <Button sx={styles.button}>
                Unirme
            </Button>
        </Box>
    )
}
