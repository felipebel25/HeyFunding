import type { NextApiRequest, NextApiResponse } from 'next'

interface SenDataCompany {
    url: string,
    name: string,
    image: string,
    tags: { name: string }[],
    description: string;

}

type Data = {
    message: string
}
    | SenDataCompany[]
const companies = [
    {
        url: "julio",
        name: "Don Julio",
        image: "/images/julio.png",
        tags: [{ name: "Agro" }, { name: "Comercio" }],
        description: 'Don Julio busca vender frutas y verduras orgánicas sin intermediarios, para lo cual necesita un camión que transportará sus productos a las ciudades. Como persona mayor, está buscando donaciones para financiar la compra del vehículo.',
        money: {
            current: '100.000',
            goal: "900.000"
        }

    },
    {
        url: "chowamandala",
        name: "Chowamandala",
        image: "/images/chowamandala.png",
        tags: [{ name: "Arte" }, { name: "Textil" }],
        description: 'Chowamandala es una empresa de arte especializada en puntillismo y tejidos de crochet, que crea muñecos, blusas, bolsos, accesorios para animales, y más. Como empresa en línea, buscan donaciones para adquirir materias primas y aumentar su producción y ventas.',
        money: {
            current: '100.000',
            goal: "900.000"
        }
    },
    {
        url: 'lamn',
        name: "LAMN",
        image: "/images/lamn.png",
        tags: [{ name: "Textil" }, { name: "Comercio" }],
        description: 'Línea Lamn es un emprendimiento liderado por mujeres que produce y vende uniformes de hospital de alta calidad. Actualmente enfrentan dificultades debido a la avería de su máquina de estampados, lo que les impide seguir produciendo. Buscan ayuda para adquirir una nueva máquina y continuar con su valioso trabajo en el sector de la salud.',
        money: {
            current: '100.000',
            goal: "900.000"
        }
    },
    {
        url: 'pizzaamericana',
        name: "Pizza Americana",
        image: "/images/pizza.png",
        tags: [{ name: "Comida Rapida" }, { name: "Comercio" }],
        description: 'Pizza Americana es un emprendimiento liderado por una joven de Fusagasugá, que se especializa en pizzas personalizadas para satisfacer necesidades dietéticas especiales. Busca donaciones para abrir su primer local y expandir su negocio.',
        money: {
            current: '100.000',
            goal: "900.000"
        }
    },
    {
        url: 'verdebendito',
        name: "Verde bendito",
        image: "/images/verde.png",
        tags: [{ name: "Agro" }, { name: "Comercio" }],
        description: "Un grupo universitario ha creado una empresa que cultiva plantas y ha descubierto una especie atractiva y de bajo mantenimiento para el hogar. Buscan fondos para adquirir productos químicos y empezar a venderla.",
        money: {
            current: '100.000',
            goal: "900.000"
        }
    }

]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { company } = req.query

    const filterCompany: SenDataCompany[] = companies.filter((_company) => _company.url === company)

    switch (req.method) {
        case 'GET':
            res.status(200).json(filterCompany)
            break;

        default:
            res.status(400).json({ message: 'bad request' })
            break;
    }

}