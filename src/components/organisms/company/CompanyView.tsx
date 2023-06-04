import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useRef, useState } from "react";
import { ICompany } from "@/interfaces/ICompany"
import { Box, Button, Chip, Slider, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesCompanyView";
import { FirstSection } from "@/components/molecules/firstSection/FirstSection";
import { AppLayout } from "@/components/atoms";
import axios from "axios";

interface Props {
    company: ICompany;
}

const FORM_ID = 'payment-form';
export const CompanyView = ({ company }: Props) => {
    const refToTop = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState('')
    useEffect(() => {
        (async () => {
            if (url) return;
            const { data: preference } = await axios.post("/api/checkout", {
                company:{
                    title: `${company.name} - Hey Funding`},
            });
            setUrl(preference.url);
            const script = document.createElement('script');
            script.src = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
            script.type = "text/javascript";
            script.dataset.preferenceId = preference.preferenceId;
            const form: any = document.getElementById(FORM_ID);
            form.appendChild(script);
        })()
        refToTop.current && refToTop.current.scrollTo(0, 1)

    }, [])

    const responsive = {
        0: {
            items: 1
        },

    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoPlay: true,

    };

    const percent: number = Math.trunc(100 * Number(company.money.currentNumber) / Number(company.money.goalNumber));
    
    return (
        <AppLayout
            title={`${company.name} - HF`}
            pageDescription={company.description}
        >
            <Box ref={refToTop} sx={styles.container}>
                <Box sx={styles.main} component='main' >
                    <Box sx={styles.imageSection}>
                        <AliceCarousel
                            autoPlayInterval={3000}
                            animationDuration={1000}
                            responsive={responsive}
                            disableButtonsControls
                            {...settings}
                        >
                            {company.images.map(image => (
                                <Image
                                    key={image}
                                    width={232}
                                    height={225}
                                    src={`${image}`}
                                    alt={company.name}
                                    style={styles.imageCompany}
                                />
                            ))}

                        </AliceCarousel>
                        <Box sx={styles.chipContainer}>
                            {company.tags.map(tag => (
                                <Chip sx={styles.chip} key={tag.name} label={`# ${tag.name}`} />
                            ))}
                        </Box>
                    </Box>
                    <Box sx={styles.textCompanySection}>
                        <Typography sx={styles.titleCompany}>{company.name}</Typography>
                        <Typography sx={styles.descriptionCompany}>{company.description}</Typography>
                    </Box>
                    <Box sx={styles.moneySection}>
                        <Box sx={styles.moneyHFImpact}>
                            <Typography variant="h5" sx={styles.textImpact}>
                                HF Impacto
                            </Typography>
                            <Box sx={styles.containerImage}>
                                <Image
                                    alt="Empresas"
                                    style={{ width: "100%", height: "100%" }}
                                    quality={90}
                                    src='/images/hf_small.png'
                                    width={40}
                                    height={40}
                                    layout="responsive"
                                />
                            </Box>
                        </Box>
                        <Box sx={styles.progressSection}>
                            <Slider
                                sx={styles.sliderProgress}
                                value={percent}
                            />
                            <Box sx={styles.progressText}>
                                <Typography variant="body2">
                                    <b> Meta: </b> ${company.money.goal}
                                </Typography>
                                <Typography variant="body2">
                                    <b>Total Recaudado:</b> ${company.money.current}
                                </Typography>
                            </Box>
                        </Box>
                        <form className="fadeIn" style={styles.botonMercadoPago} id={FORM_ID} />

                    </Box>
                </Box>
                <FirstSection title="Otros Emprendimientos" />
            </Box>
        </AppLayout >
    )
}


