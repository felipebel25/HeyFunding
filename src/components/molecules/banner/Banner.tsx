import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesBanner"

export const Banner = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.textContainer}>
                <Typography component='h1' variant="h1" sx={styles.title}>Que es Hey Funding?</Typography>
                <Typography variant="subtitle1" sx={styles.description}>Hey funding ayuda a emprendedores innovadores a través de donaciones para crear o mejorar sus negocios y adquirir elementos necesarios para producir servicios. Promovemos efectivamente a estos emprendedores y nos comprometemos a garantizar el uso responsable y efectivo de las donaciones. Creemos en la colaboración y la innovación para hacer realidad los sueños empresariales y crear un mundo mejor. </Typography>
            </Box>
            <Box sx={styles.imageContainer}>
                <Image
                    alt="Empresas"
                    style={{ width: "100%", height: "100%" }}
                    quality={100}
                    src='/images/hf_logo.png'
                    width={40}
                    height={40}
                    layout="responsive"
                />
            </Box>

        </Box>
    )
}
