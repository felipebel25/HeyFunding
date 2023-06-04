export const styles = {
    container: {
        height: "100vh"
    },
    main: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-evenly",
        alignItems: "center",
        height: { xs: 'auto', md: "60vh" },
        backgroundColor: "info.main",
        padding: { xs: "5% 0" }

    },
    imageSection: {
        width: "23.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },
    imageCompany: {
        borderRadius: "2.5rem",
        margin: "0 auto",

    },
    titleCompany: {
        fontSize: { xs: "2.4rem", md: "3.6rem" },
        fontWeight: 600
    },
    descriptionCompany: {
        fontSize: { xs: "1.6rem", md: "1.8rem" },

        maxHeight: "25rem",
        overflowY: "auto",

    },
    chip: {
        backgroundColor: "secondary.main",
        margin: "0.4rem",
        fontSize: "1.4rem"
    },
    chipContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "2% 0"
    },
    textCompanySection: {
        width: { xs: "90%", md: "35%" },
        marginBottom: { xs: "5rem", md: "0" }
    },
    moneySection: {
        width: { xs: "85%", md: "20%" },
        height: { xs: "35rem", md: "auto" },
        borderRadius: "2.5rem",
        padding: "2.5rem 3rem",
        backgroundColor: "secondary.main",
        boxShadow: "0px 0px 11px 1px #ffbfaa"
    },
    moneyHFImpact: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%"
    },
    textImpact: {
        color: "black",
        fontSize: "2rem",
        fontWeight: "600",
    },
    containerImage: {
        display: "flex",
        width: { xs: "19%", md: "19%" },
        cursor: "pointer",
    },
    progressSection: {
        mt: "4%",
    },
    sliderProgress: {
        height: '1rem',
        '& .MuiSlider-rail': {
            backgroundColor: 'info.main'
        },
        '& .MuiSlider-thumb': {
            width: '0px',
            height: '0px'
        },
        '& .MuiSlider-track': {
            backgroundColor: 'info.main',
            border: "none"
        }
    },
    progressText: {
        m: "2rem 0",
        marginBottom: "4rem"
    },
    botonMercadoPago: {
        width: "100%",
        fontSize: "2rem",
    },

}