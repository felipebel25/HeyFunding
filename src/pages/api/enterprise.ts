import type { NextApiRequest, NextApiResponse } from 'next'

interface SenDataCompany {
    url: string,
    name: string,
    images: string[],
    tags: { name: string }[],
    description: string;
    money: {
        current: string;
        goal: string;
        currentNumber: number;
        goalNumber: number;
    }

}

type Data = {
    message: string
}
    | SenDataCompany[]
const companies = [
    {
        url: "julio",
        name: "Don Julio",
        images: ["https://i.ibb.co/chvyJFL/don-julio-3.jpg", "https://i.ibb.co/hd4JfbX/don-julio-1.jpg", "https://i.ibb.co/k121NTw/don-julio-2.jpg"],
        tags: [{ name: "Agro" }, { name: "Comercio" }],
        description: 'Don Julio, un emprendedor de edad avanzada, tiene una visión de negocio inspiradora: vender frutas y verduras orgánicas directamente, sin intermediarios. Para hacer realidad este sueño, está buscando donaciones que le permitan adquirir su primer camión de transporte. Este camión desempeñará un papel crucial en su emprendimiento, ya que le permitirá llevar sus productos frescos y saludables a las ciudades, llegando directamente a los consumidores que buscan opciones orgánicas y sostenibles. La adquisición de este camión no solo beneficiará a Don Julio al impulsar su negocio, sino que también contribuirá a promover una alimentación saludable, el comercio justo y la reducción de la huella ambiental al eliminar intermediarios innecesarios en el proceso de distribución de alimentos. Cualquier donación, por modesta que sea, será de gran ayuda para Don Julio en su camino hacia el éxito y para fomentar un cambio positivo en la forma en que consumimos alimentos. Su apoyo marcará la diferencia al respaldar a un emprendedor valiente y comprometido, mientras promueve la salud y la sostenibilidad en nuestras comunidades. ¡Únase a Don Julio en su misión y hagamos posible su sueño de llevar alimentos orgánicos de calidad a todos aquellos que los deseen!',
        money: {
            current: '26.090.000',
            goal: "29.000.000",
            currentNumber: 26090000,
            goalNumber: 29000000,
        }

    },
    {
        url: "chowamandala",
        name: "Chowamandala",
        images: ["https://i.ibb.co/851bS4s/crowa-1.jpg", "https://i.ibb.co/jrkbNS8/crowa-3.jpg", 'https://i.ibb.co/ZVgfJqx/crowa-2.jpg'],
        tags: [{ name: "Arte" }, { name: "Textil" }],
        description: "Chowamandala, una empresa de arte especializada en puntillismo y tejidos de crochet, se dedica a la creación de obras únicas y hermosas. Su amplia gama de productos incluye desde adorables muñecos de personajes hasta elegantes blusas, bolsos y accesorios para animales. Como una empresa que opera en línea, Chowamandala ha encontrado su lugar en el mercado, ofreciendo creaciones artísticas hechas a mano con dedicación y pasión. Sin embargo, para seguir creciendo y satisfaciendo la demanda de sus clientes, Chowamandala se encuentra en busca de donaciones. Estas donaciones serían utilizadas para adquirir más materias primas, lo que permitiría a la empresa aumentar su producción y expandir sus ventas. Con los fondos necesarios, Chowamandala podría comprar una variedad de hilos, telas y otros materiales esenciales, lo que a su vez les daría la oportunidad de ampliar su catálogo y satisfacer aún más los gustos y preferencias de su clientela.La contribución que usted pueda realizar a Chowamandala sería invaluable para respaldar a esta pequeña empresa artesanal y ayudarles a alcanzar su máximo potencial. Su donación no solo permitiría el crecimiento de Chowamandala, sino que también impulsaría el arte hecho a mano y fomentaría el aprecio por la creatividad y el trabajo artístico.Únase a nosotros en esta causa y ayude a Chowamandala a continuar llevando alegría y belleza a través de sus creaciones. Cada donación, por pequeña que sea, marcará una diferencia significativa en el desarrollo y éxito de esta empresa. Juntos, podemos apoyar a los artistas y promover la importancia del arte en nuestras vidas. ¡Su generosidad y apoyo son fundamentales para el crecimiento de Chowamandala y el florecimiento del arte en nuestra sociedad!",
        money: {
            current: '31.800.000',
            goal: "39.000.000",
            currentNumber: 31800000,
            goalNumber: 39000000,

        }
    },
    {
        url: 'lamn',
        name: "LAMN",
        images: ["https://i.ibb.co/vcqsK15/LAMN-1.jpg", "https://i.ibb.co/c6dSL89/LAMN-2.jpg", "https://i.ibb.co/jw7xsVh/LAMN-3.jpg"],
        tags: [{ name: "Textil" }, { name: "Comercio" }],
        description: "LAMN es una empresa dedicada a la producción y venta de uniformes de hospital. Con un enfoque en la calidad y la satisfacción del cliente, se han convertido en un referente en la industria. Esta empresa está comprometida con su labor y con el impacto que generan en el ámbito de la salud. Los uniformes de hospital que producen son esenciales para mantener la seguridad e higiene en entornos médicos, y su ausencia puede afectar negativamente la calidad de atención y el bienestar tanto de los profesionales de la salud como de los pacientes. Recientemente, la máquina de estampados que utilizan para la producción de los uniformes ha sufrido una avería importante y no ha sido posible repararla. Esta máquina es fundamental para el proceso de fabricación, ya que garantiza la calidad y la durabilidad de los diseños impresos en los uniformes. Sin esta máquina, la producción se ha detenido por completo, y con ello, los ingresos que sustentan a la empresa y a su equipo de trabajadores.Cualquier aporte, por pequeño que sea, será de gran ayuda para superar esta situación y permitir que LAMN siga cumpliendo con su valioso trabajo en la industria de uniformes hospitalarios. Su donación no solo respaldará a esta empresa, sino que también contribuirá al cuidado de la salud y al bienestar de quienes dependen de estos uniformes en su trabajo diario.",
        money: {
            current: '30.200.000',
            goal: "32.000.000",
            currentNumber: 30200000,
            goalNumber: 32000000,
        }
    },
    {
        url: 'pizzaamericana',
        name: "Pizza Americana",
        images: ["https://i.ibb.co/ZmqG57y/pizza-americana-1.jpg", "https://i.ibb.co/Vp7HpxT/pizza-americana-3.jpg", "https://i.ibb.co/wSBHYmY/pizza-americana-2.jpg"],
        tags: [{ name: "Comida Rapida" }, { name: "Comercio" }],
        description: "Con una dedicación inquebrantable, Pizza Americana se ha convertido en un faro de esperanza para aquellos que enfrentan desafíos dietéticos, ofreciéndoles una alternativa deliciosa y segura para disfrutar de la popularidad y la versatilidad de las pizzas. Desde pizzas sin gluten hasta opciones vegetarianas, bajas en sodio o sin lactosa, esta empresa se compromete a brindar opciones adaptadas a las necesidades específicas de sus clientes. Para llevar este noble emprendimiento al siguiente nivel y expandir su impacto positivo en la comunidad, Pizza Americana está buscando donaciones que les permitan abrir su primer local físico. Estas donaciones serían utilizadas para cubrir los costos de alquiler, adquisición de equipos y utensilios necesarios para establecer un espacio adecuado donde la magia de sus pizzas a medida pueda realizarse. Su contribución sería esencial para ayudar a Pizza Americana a hacer realidad su sueño y continuar brindando opciones gastronómicas inclusivas y nutritivas para aquellos que luchan con enfermedades y restricciones dietéticas. Cada donación, sin importar su tamaño, marcará la diferencia en la capacidad de esta joven emprendedora para abrir las puertas de su local y llevar alegría y sabor a más personas en busca de una experiencia de pizza personalizada y adaptada a sus necesidades específicas. Únase a nosotros en este apasionante viaje y apoye a Pizza Americana en su misión de hacer que las pizzas sean accesibles para todos. Su generosidad y solidaridad contribuirán a un cambio significativo en la vida de aquellos que buscan disfrutar de una comida sabrosa sin comprometer su salud. ¡Ayude a hacer realidad el sueño de Pizza Americana y únase a nosotros en la construcción de una comunidad inclusiva y llena de opciones deliciosas para todos!",
        money: {
            current: '33.000.000',
            goal: "35.000.000",
            currentNumber: 33000000,
            goalNumber: 35000000,

        }
    },
    {
        url: 'verdebendito',
        name: "Verde bendito",
        images: ["https://i.ibb.co/D4fmG5W/verde-2.jpg", "https://i.ibb.co/yqkPtNg/verde-1.jpg"],
        tags: [{ name: "Agro" }, { name: "Comercio" }],
        description: "Un grupo de jóvenes universitarios ha dado vida a un emprendimiento revolucionario dedicado al cultivo de plantas. A través de su pasión y dedicación, han descubierto una especie de planta excepcional que tiene la capacidad de sobrevivir en ambientes domésticos con poco mantenimiento, al tiempo que ofrece una apariencia visualmente cautivadora. Con el objetivo de llevar esta planta única al mercado y compartir sus beneficios con otros entusiastas de las plantas, esta empresa innovadora está en busca de donaciones que les permitan adquirir los productos químicos esenciales para el cultivo y la propagación de esta especie.El éxito de esta empresa y su capacidad para proporcionar a los amantes de las plantas una opción atractiva y de bajo mantenimiento depende en gran medida de la inversión inicial necesaria para obtener los productos químicos necesarios. Estos productos juegan un papel vital en el crecimiento saludable y el desarrollo de la planta, garantizando su resistencia y belleza a lo largo del tiempo.Su generosidad y apoyo financiero serían de gran ayuda para hacer posible la producción y comercialización de esta planta única. Con su donación, no solo estaría respaldando a un grupo de emprendedores jóvenes y apasionados, sino que también estaría contribuyendo a la diversidad y la belleza en los hogares, al permitir que más personas puedan disfrutar de esta planta única y de bajo mantenimiento.Únase a nosotros en esta emocionante aventura y sea parte del impulso para llevar esta planta especial al mercado. Cada donación, sin importar su tamaño, tendrá un impacto significativo en la capacidad de esta empresa para adquirir los productos químicos necesarios y cumplir con su objetivo de brindar opciones atractivas y de bajo mantenimiento a los amantes de las plantas en todo el mundo.Apreciamos profundamente su consideración y apoyo. Juntos, podemos marcar la diferencia al respaldar la innovación, el cultivo sostenible y la belleza natural en nuestros hogares. ¡Su donación nos ayudará a convertir esta visión en realidad y aportará alegría y frescura a la vida de muchas personas a través de esta planta única y fascinante!",
        money: {
            current: '31.100.000',
            goal: "31.000.000",
            currentNumber: 31100000,
            goalNumber: 31000000,

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