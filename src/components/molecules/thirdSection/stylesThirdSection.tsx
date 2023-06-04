export const styles = {
    main: {
        border: "1px solid transparent",
        backgroundColor: "info.main",
        height: { xs: "auto", md: "auto" },
        pb:'3%'
    },
    title: {
        textAlign: "center",
        fontSize: { xs: "2.4rem", md: "3.4rem" },
        fontWeight: 500,
        margin: { xs: "10%", md: "3%" },
        height: { xs: "7%", md: "auto" }
    },
    card: {
        width: { xs: '90%', md: "20%" },
        height: { xs: "20rem", md: "27rem" },
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: "1rem",
        cursor: 'pointer',
        margin: { xs: "5% auto", md: "0" },
        padding:"5% 0",
        '&:hover': {
            transition: 'all 0.3s ease-in-out',
            opacity: "0.9"
        }
    },
    cardContainer: {
        display: 'flex',
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" },
        height: "80%",
    },
    desciptionCard: {
        color: "primary.main",
        textAlign: "center",
        width: "90%"
    },
    image: {
        width: { xs: "30%", md: "20%" },
        height: { xs: "60%", md: "100%" },
        m: { xs: "5%", md: "5%" },
        maxWidth: "200px",

        display: "flex",
        justifyContent: "center"
    }

}