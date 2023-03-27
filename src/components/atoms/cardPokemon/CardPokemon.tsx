import { IPokemon } from "@/interfaces/pokemons"
import { useState } from "react";
import { Box, capitalize, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { styles } from "./stylesCardPokemon"

interface Props {
    pokemon: any;
    onOpen?: () => void;
}

export const CardPokemon = ({ pokemon, onOpen = () => { } }: Props) => {
    const [isErrorImage, setIsErrorImage] = useState(false)
    return (
        <Card key={pokemon.name} sx={styles.card} onClick={() => onOpen()}>
            <CardActionArea sx={styles.cardActionArea}>
                <CardMedia
                    component='img'
                    sx={styles.cardImage}
                    onError={() => setIsErrorImage(true)}
                    src={pokemon.image}
                />
                {/* <Box sx={styles.weight}>
                    <Box sx={styles.weightTag}>
                        <Typography sx={styles.weightText}>{pokemon.weight} lbs</Typography>
                    </Box>
                </Box> */}
                <CardContent sx={styles.cardContainerText}>
                    <Typography sx={styles.name}>{capitalize(pokemon.name)}</Typography>
                    <Typography style={styles.description}>{pokemon.description}</Typography>
                    {pokemon.moves[0] &&
                        <Box sx={styles.abilities}>
                            {pokemon.moves?.map((moves: any) => (
                                <Typography key={moves?.name} sx={styles.ability}>#{moves?.name ?? ''}</Typography>
                            ))}
                        </Box>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
