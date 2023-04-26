import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../css/login.css'
import {Button, TextField} from "@mui/material";
import {styled} from "@mui/system";
import axios from "axios";
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
        setLoginData
    } = params
    const handleClose = () => setShowModal(false);

    const handleLoginIntoWorkfront = async () => {

        await axios.post('/api/middlewareApi', loginData).then(async (res: any) => {
            console.log("response :::: ", res)
        })
        // axios.post('https://j96kazi23.testdrive.workfront.com/attask/api/v5.0/login', loginData,{
        //     headers: {
        //         "Cookie": "XSRF-TOKEN=a387992720e442bcb9197de2bf32809c; attask=fd70792c73204da2b39e160d710eabdd; sessionExpiration=1682917052606; wf-node=f01c8b62-5cb2-4a95-b7cc-3487f99e2f63",
        //         "Cache-Control": "no-cache",
        //         "Postman-Token": "<calculated when request is sent>",
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Content-Length": "<calculated when request is sent>",
        //         "Host": "<calculated when request is sent>",
        //         "Accept": "*/*",
        //         "Accept-Encoding": "gzip, deflate, br",
        //         "Connection": "keep-alive",
        //         "x-requested-with": "XMLHttpRequest",
        //         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36",
        //         "content-type": "application/x-www-form-urlencoded"
        //     }}).then((res) => {
        //     console.log("response from api ::: ", res)
        // })
        console.log("handleLoginIntoWorkFront :: ")
        fetch('https://j96kazi23.testdrive.workfront.com/attask/api/v5.0/login', {
            method: 'POST',
            headers: {
                "Cookie": "XSRF-TOKEN=a387992720e442bcb9197de2bf32809c; attask=fd70792c73204da2b39e160d710eabdd; sessionExpiration=1682917052606; wf-node=f01c8b62-5cb2-4a95-b7cc-3487f99e2f63",
                "Cache-Control": "no-cache",
                "Postman-Token": "<calculated when request is sent>",
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": "<calculated when request is sent>",
                "Host": "<calculated when request is sent>",
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                "x-requested-with": "XMLHttpRequest",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36",
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": {
                    "type": "string",
                    "description": "Which origin can invoke the /test API\n",
                    "default": "http://localhost:3000/"
                },
                "Access-Control-Allow-Methods": {
                    "type": "string",
                    "description": "Which methods are allowed\n",
                    "default": "GET, POST, PUT"
                }
            },
            body: loginData // Here, stringContent or bufferContent would also work
        }).then(function (res) {
            return res.json();
        })
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