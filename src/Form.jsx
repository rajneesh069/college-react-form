import { Button } from '@mui/material';
import { TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Form() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const [review, setReview] = useState("");
    return <div>
        <div style={{ display: "flex", width: "50%", height: "96vh", flexWrap: "wrap", marginLeft: "25%", alignContent: "center", gap: "2%" }}>
            <Typography variant='h4' autoFocus textAlign={"center"} marginLeft={"20%"} marginBottom={"3%"} >Submit your review here.</Typography>
            <TextField variant="standard" name='email' label="Email" type='email' autoComplete={false} fullWidth autoFocus value={email}
                onChange={(event) => {
                    const { value } = event.target;
                    setEmail(value);
                }}></TextField>
            <TextField variant="standard" name="collegeId" label="College ID" autoComplete="off" type='text' fullWidth value={collegeId}
                onChange={(event) => {
                    const { value } = event.target;
                    setCollegeId(value);
                }}></TextField>
            <TextField variant="outlined" name='review' autoComplete={false} minRows={"3"} multiline={true} label="Review" type='text' fullWidth value={review}
                onChange={(event) => {
                    const { value } = event.target;
                    setReview(value);
                }}></TextField>
            <Button variant="contained" onClick={async () => {
                try {
                    const response = await axios.post("http://localhost:3000/", { email, collegeId, review }, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (response) {
                        navigate("/submitted");
                    }
                } catch (error) {
                    navigate("/failure");
                    console.error(error);
                }
            }}>Submit</Button>
        </div>
    </div >
}
export default Form;