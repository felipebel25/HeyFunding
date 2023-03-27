import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesThirdSection"

export const ThirdSection = () => {
    return (
        <Box sx={styles.main}>
            <Typography component='h2' sx={styles.title} >¿Por qué escoger Hey Funding?</Typography>
            <Box sx={styles.cardContainer}>
                <Box sx={styles.card}>
                    <Box sx={styles.image}>
                        <Image
                            alt="Empresas"
                            style={{ width: "100%", height: "100%" }}
                            quality={100}
                            src='/images/share.svg'
                            width={1080}
                            height={720}
                            layout="responsive"
                        />
                    </Box>
                    <Typography sx={styles.desciptionCard}>Desarrollo tecnologico enfocado en recaudo colectivo de fondos.</Typography>
                </Box>
                <Box sx={styles.card}>
                    <Box sx={styles.image}>
                        <Image
                            alt="Empresas"
                            style={{ width: "80%", height: "100%" }}
                            quality={100}
                            src='/images/security.png'
                            width={1080}
                            height={720}
                        />
                    </Box>
                    <Typography sx={styles.desciptionCard}>Financiación transparente:  sabemos a donde van los fondos recaudados.                    </Typography>
                </Box>
                <Box sx={styles.card}>
                    <Box sx={styles.image}>
                        <Image
                            alt="Empresas"
                            style={{ width: "80%", height: "100%" }}
                            quality={100}
                            src='/images/check.png'
                            width={1080}
                            height={720}
                        />
                    </Box>
                    <Typography sx={styles.desciptionCard}>Seguridad en transacciones para ti y nuestros emprendimientos.</Typography>
                </Box>
            </Box>
        </Box>
    )
}
