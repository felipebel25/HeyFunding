import { useState } from "react";
import { Box, capitalize, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { styles } from "./stylesCardCompany";
import { useRouter } from "next/router";

interface Props {
    company: any;
    onOpen?: () => void;
}

export const CardCompany = ({ company, onOpen = () => { } }: Props) => {
    const { push } = useRouter()
    const [isErrorImage, setIsErrorImage] = useState(false)
    return (
        <Card key={company.name} sx={styles.card} onClick={() => push(`/company/${company.url}`)}>
            <CardActionArea sx={styles.cardActionArea}>
                <CardMedia
                    component='img'
                    sx={styles.cardImage}
                    onError={() => setIsErrorImage(true)}
                    src={company.image}
                />
                <CardContent sx={styles.cardContainerText}>
                    <Typography sx={styles.name}>{capitalize(company.name)}</Typography>
                    <Typography style={styles.description}>{company.description}</Typography>
                    {company.moves[0] &&
                        <Box sx={styles.abilities}>
                            {company.moves?.map((moves: any) => (
                                <Typography key={moves?.name} sx={styles.ability}>#{moves?.name ?? ''}</Typography>
                            ))}
                        </Box>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
