import { AppLayout } from "@atoms";
import { Box } from "@mui/material";

import { Banner } from "@/components/molecules/banner/Banner";
import { FirstSection } from "@/components/molecules/firstSection/FirstSection";
import { SecondSection } from "@/components/molecules/secondSection/SecondSection";
import { ThirdSection } from "@/components/molecules/thirdSection/ThirdSection";
import { Footer } from "@/components/molecules/footer/Footer";
import { Opinion } from "@/components/molecules/opinion/Opinion";


export const HomeView = () => {
    return (
        <AppLayout title="Home : Hey Funding" pageDescription="Hey funding es una plataforma que ayuda a emprendedores innovadores a través de donaciones para crear o mejorar sus negocios y servicios. Garantizamos el uso responsable de las donaciones y promovemos efectivamente a nuestros emprendedores. ¡Únete a nuestra comunidad y ayuda a crear un mundo mejor!">
            <Box sx={{ overflow: "auto", height: "calc(100vh - 7rem)" }}>
                <Banner />
                <FirstSection title="Algunos Emprendimientos" />
                <SecondSection />
                <ThirdSection />
                <Opinion />
                <Footer />
            </Box>
        </AppLayout>
    )
}