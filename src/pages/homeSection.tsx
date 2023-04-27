import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import {styled} from "@mui/system";
import {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import {toast} from "react-toastify";

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '30%',
    padding: 5,
    borderRadius: 5,
    height: "auto",
    backgroundColor: "white"
};
const textField = {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '7px'
};
const CssTextField = styled(TextField)({

    '& .MuiOutlinedInput-root': {
        fontSize: '1.12rem !important',
        '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
        },
    },
    '& MuiInputBase-input': {
        width: '100% !important'
    },
    '& label.Mui-focused': {
        color: 'grey',
    },
    input: {
        color: "black",
        fontSize: "16px",
    },
    label: {
        fontSize: "18px",
    },

});

const HomeSection = () => {
    const cookies = new Cookies()
    const [timeOffData, setTimeOffData] = useState({
        startDate: new Date().toISOString().slice(0, 10),
        endDate: new Date().toISOString().slice(0, 10),
    })
    const [loginData, setLoginData] = useState()

    useEffect(() => {
        setLoginData(cookies.get("LoginCredential"))
    }, [])

    const handleLeaves = async () => {
        const data = {
            userID: loginData.userID,
            startDate: timeOffData.startDate,
            endDate: timeOffData.endDate,
            sessionID: loginData.sessionID,
        }
        await axios.post('/api/applyOff', data).then(async (res: any) => {
            toast.success("Successfully created a leave", {
                position: 'top-center',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                pauseOnFocusLoss: false,
            })
        })
    }
    return (
        <div className={"timeOffSection"}>
            <Box sx={style}>
                <div className={"textFieldSection"}>
                    <CssTextField id="outlined-basic" label="StartDate" variant="outlined"
                                  sx={textField}
                                  defaultValue={timeOffData.startDate}
                                  value={timeOffData.startDate}
                                  type="date"
                                  onChange={(e) => setTimeOffData((prevState: any) => ({
                                      ...prevState,
                                      startDate: e.target.value,
                                  }))}
                    />
                </div>
                <div className={"textFieldSection"}>
                    <CssTextField id="outlined-basic" label="End Date" variant="outlined"
                                  sx={textField}
                                  type={"date"}
                                  defaultValue={timeOffData.endDate}
                                  value={timeOffData.endDate}
                                  onChange={(e) => setTimeOffData((prevState: any) => ({
                                      ...prevState,
                                      endDate: e.target.value,
                                  }))}
                    />
                </div>
                <Button variant={"contained"} className={"loginButton"}
                        onClick={handleLeaves}>Apply Time Off</Button>
            </Box>
        </div>
    )

}
export default HomeSection