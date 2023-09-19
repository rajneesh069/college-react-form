import { Typography } from "@mui/material";

function Submitted() {
    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", height: "100vh", backgroundColor: "black" }}>
        <Typography variant="h3" color={"white"}>Form Submitted successfully</Typography>
    </div>
}

export default Submitted;