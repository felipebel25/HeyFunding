export const styles = {
    footer: {
        height: { xs: "7rem", md: "10%" },
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0% 4%",
        borderTop:"1px solid #E56B51"
    },
    image: {
        display: "flex",
        width: { xs: "auto", md: "5%" },
        height: { xs: "100%", md: "100%" },
    },
    logos: {
        width: { xs: "40%", md: "11%" },
        height: {xs:"100%" , md:"100%"},
        display: "flex",
        alignItems: {xs:"center",md:"center"},
        justifyContent: "space-between",
        pt:{xs: "0%" , md:"0"},
    },
    sn: {
        width: "auto",
        height: "40%",
        cursor: "pointer",
        '&:hover':{
            opacity: 0.5
        }
    }
}