import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Failure() {
    const navigate = useNavigate();
    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center", height: "100vh", backgroundColor: "black" }}>
        <div><Typography marginLeft={"2%"} variant="h3" color={"white"}>Looks like you ran into an error :( &nbsp;Please try again!</Typography></div>
        <div style={{ marginLeft: "12%", marginRight: "80%", marginTop: "2%" }} > <Button variant="contained" onClick={() => {
            navigate("/");
        }}>Go Back</Button></div>
    </div>
}

export default Failure;