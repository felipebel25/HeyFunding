import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesSecondSection"

export const SecondSection = () => {
    return (
        <Box sx={styles.main}>
            <Typography color='primary.main' sx={styles.title}>Nuestros Socios</Typography>
            <Box sx={styles.imagesContainer}>
                <Box sx={styles.image}>
                    <Image
                        alt="Empresas"
                        style={{ width: "100%", height: "100%" }}
                        quality={100}
                        src='/images/shark_tank.png'
                        width={581}
                        height={480}
                        layout="responsive"
                    />
                </Box>
                <Box sx={styles.image}>
                    <Image
                        alt="Empresas"
                        style={{ width: "100%", height: "100%" }}
                        quality={100}
                        src='/images/accp.png'
                        width={1080}
                        height={720}
                        layout="responsive"
                    />
                </Box>
            </Box>
        </Box>
    )
}
