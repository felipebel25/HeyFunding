export const styles = {
    card: {
        boxShadow: '0px -1px 10px 0px #0e4b8e70',
        margin: { xs: "2% auto", md: "2%" },
        width: { xs: "90%", md: "29%" },
        height: { xs: "10%", md: "20%" },
        background: "#40456c1f",
        minHeight: "270px",
        cursor: "pointer"
    },
    cardImage: {
        width: { xs: '80%', md: "50%" },
        height: { xs: "70%", md: "25%" },
        margin: '0 auto',
        objectFit: "contain",
        padding: "1%"
    },
    name: {
        fontWeight: 700
    },
    abilities: {
        display: "flex"
    },
    ability: {
        mt: '2%',
        marginRight: '2%',
        fontSize: "1rem"

    },
    cardContainerText: {
        backgroundColor: 'info.main',
        height: { xs: "30%", md: "85%" },
        padding: "2% 6%"
    },
    weight: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 10%",
        alignItems: "center"
    },
    weightTag: {
        width: '25%',
        height: "2.5rem",
        background: "#656999",
        position: "relative",
        bottom: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: "1rem"
    },
    weightText: {
        fontSize: "1rem",
        color: "white",

    },
    containerPagination: {
        height: "7%",
        display: "flex",
        alignItems: 'center',
    },
    cardActionArea: {
        width: "100%",
        height: "100%"
    },
    description: {
        fontSize: "1.2rem"
    }
}