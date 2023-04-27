import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, TextField} from "@mui/material";
import {styled} from "@mui/system";
import axios from "axios";
import Cookies from "universal-cookie";

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

export const SignInSignUpModal = (params: any) => {
    const {
        loginData,
        setLoginData,
        setLoginResponse
    } = params
    const cookies = new Cookies()

    const handleLoginIntoWorkfront = async () => {
        await axios.post('/api/workfrontLogin', loginData).then(async (res: any) => {
            cookies.set("LoginCredential", res.data.data)
            setLoginResponse(res.data.data)
        })
    }

    return (
        <div className={"timeOffSection"}>
            <Box sx={style}>
                <div className={"textFieldSection"}>
                    <CssTextField id="outlined-basic" label="UserName" variant="outlined"
                                  sx={textField}
                                  onChange={(e) => setLoginData((prevState: any) => ({
                                      ...prevState,
                                      username: e.target.value,
                                  }))}
                    />
                </div>
                <div className={"textFieldSection"}>
                    <CssTextField id="outlined-basic" label="Password" variant="outlined"
                                  sx={textField}
                                  onChange={(e) => setLoginData((prevState: any) => ({
                                      ...prevState,
                                      password: e.target.value,
                                  }))}
                    />
                </div>
                <Button variant={"contained"} className={"loginButton"}
                        onClick={handleLoginIntoWorkfront}>Login</Button>
            </Box>
        </div>
    );
}
export default SignInSignUpModal