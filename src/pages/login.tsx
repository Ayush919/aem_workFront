import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import '../pages/css/login.css'
import {Button, TextField} from "@mui/material";
import {styled} from "@mui/system";
import axios from "axios";
import {useState} from "react";

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
        showModal,
        setShowModal,
        loginData,
        setLoginData,
        setLoginResponse
    } = params
    const handleClose = () => setShowModal(false);

    const handleLoginIntoWorkfront = async () => {

        await axios.post('/api/middlewareApi', loginData).then(async (res: any) => {
            console.log("response :::: ", res)
            setLoginResponse(res.data.data)
        })
        // })
        console.log("handleLoginIntoWorkFront :: ")
    }

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
            </Modal>
        </div>
    );
}
export default SignInSignUpModal