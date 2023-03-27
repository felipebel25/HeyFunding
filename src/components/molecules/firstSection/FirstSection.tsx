import { CardPokemon } from "@/components/atoms"
import { Box, Typography } from "@mui/material"
import { styles } from "./stylesFirstSection"

const julio = {
    name: "Don Julio",
    image: "/images/julio.png",
    moves: [{ name: "Agro" }, { name: "Comercio" }],
    description:'Don Julio busca vender frutas y verduras orgánicas sin intermediarios, para lo cual necesita un camión que transportará sus productos a las ciudades. Como persona mayor, está buscando donaciones para financiar la compra del vehículo.'
}

const chowamandala = {
    name: "Chowamandala",
    image: "/images/chowamandala.png",
    moves: [{ name: "Arte" }, { name: "Textil" }],
    description:'Chowamandala es una empresa de arte especializada en puntillismo y tejidos de crochet, que crea muñecos, blusas, bolsos, accesorios para animales, y más. Como empresa en línea, buscan donaciones para adquirir materias primas y aumentar su producción y ventas.'
}

const lamn = {
    name: "LAMN",
    image: "/images/lamn.png",
    moves: [{ name: "Textil" }, { name: "Comercio" }],
    description:'Línea Lamn es un emprendimiento liderado por mujeres que produce y vende uniformes de hospital de alta calidad. Actualmente enfrentan dificultades debido a la avería de su máquina de estampados, lo que les impide seguir produciendo. Buscan ayuda para adquirir una nueva máquina y continuar con su valioso trabajo en el sector de la salud.'
}

const pizza = {
    name: "Pizza Americana",
    image: "/images/pizza.png",
    moves: [{ name: "Comida Rapida" }, { name: "Comercio" }],
    description:'Pizza Americana es un emprendimiento liderado por una joven de Fusagasugá, que se especializa en pizzas personalizadas para satisfacer necesidades dietéticas especiales. Busca donaciones para abrir su primer local y expandir su negocio..'
}

const verde = {
    name: "Verde alma",
    image: "/images/verde.png",
    moves: [{ name: "Agro" }, { name: "Comercio" }],
    description:'Un grupo universitario ha creado una empresa que cultiva plantas y ha descubierto una especie atractiva y de bajo mantenimiento para el hogar. Buscan fondos para adquirir productos químicos y empezar a venderla."'
}
export const FirstSection = () => {
    return (
        <Box sx={styles.main}>
            <Typography component='h2' sx={styles.title}>Algunos Emprendimientos</Typography>
            <Box sx={styles.containerCards}>
                <CardPokemon pokemon={lamn} />
                <CardPokemon pokemon={chowamandala} />
                <CardPokemon pokemon={julio} />
                <CardPokemon pokemon={pizza} />
                <CardPokemon pokemon={verde} />
                <CardPokemon pokemon={verde} />

            </Box>


        </Box>
    )
}
