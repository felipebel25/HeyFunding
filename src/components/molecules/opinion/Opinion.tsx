import { Avatar, Box, Card, CardContent, CardHeader, Typography } from "@mui/material"
import { styles } from "./stylesOpinion";

export const Opinion = () => {
    return (
        <Box sx={styles.main}>
            <Typography variant="h2" component='h2' sx={styles.title}>Lo que más gustó:</Typography>
            {opinions.map(o => (
                <Card sx={styles.card} key={o.description}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'info.main' }} aria-label="recipe">
                                {o.description.charAt(0).toUpperCase()}
                            </Avatar>
                        }
                        title={o.userName}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            {o.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}


        </Box>
    )
}






const opinions = [
    {
        userName: 'Nidia',
        description: 'La atención ofrecida por parte de los trabajadores fue buena. Excelente servicio.'
    },

    {
        userName: 'Juan Pablo',
        description: 'El envío fue rápido y los productos llegaron en perfectas condiciones. Muy satisfecha.'
    },
    {
        userName: 'Carlos',
        description: 'El servicio al cliente fue excepcional. Resolvieron todas mis dudas de manera amable.'
    }
];