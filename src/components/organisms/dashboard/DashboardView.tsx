import { AppLayout } from "@atoms";
import { Box } from "@mui/material";

import { Banner } from "@/components/molecules/banner/Banner";
import { FirstSection } from "@/components/molecules/firstSection/FirstSection";
import { SecondSection } from "@/components/molecules/secondSection/SecondSection";
import { ThirdSection } from "@/components/molecules/thirdSection/ThirdSection";
import { Footer } from "@/components/molecules/footer/Footer";

interface Props {
    data: any;
}

export const HomeView = ({ data }: Props) => {
    return (
        <AppLayout title="Home : Hey Funding" pageDescription="hey Funding">
            <Box sx={{ overflow: "auto", height: "100vh" }}>
                <Banner />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <Footer />
            </Box>
        </AppLayout>
    )
}