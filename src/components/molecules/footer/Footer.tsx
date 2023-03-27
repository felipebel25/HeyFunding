import { FacebookOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { InstagramIcon } from "public/components/InstagramIcon"
import { TwitterIcon } from "public/components/TwitterIcon"
import { styles } from "./stylesFooter"

export const Footer = () => {
    return (
        <Box component='footer' sx={styles.footer}>
            <Box sx={styles.image}>
                <Image
                    alt="Empresas"
                    style={{ width: "100%", height: "100%" }}
                    quality={100}
                    src='/images/hf_small.png'
                    width={500}
                    height={500}
                    layout="responsive"
                />

            </Box>
            
            <Box sx={styles.logos}>
                <FacebookOutlined sx={styles.sn} color="info" />
                <InstagramIcon sx={styles.sn} color="info" />
                <TwitterIcon sx={styles.sn} color="info" />
            </Box>
        </Box>
    )
}
