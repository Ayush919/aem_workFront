// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const options = req.body;
    const requestAsync = async () => {
        return new Promise((resolve, reject) => {
            axios.post('https://j96kazi23.testdrive.workfront.com/attask/api/v5.0/login', options, {
                headers: {
                    "Cookie": "XSRF-TOKEN=a387992720e442bcb9197de2bf32809c; attask=fd70792c73204da2b39e160d710eabdd; sessionExpiration=1682917052606; wf-node=f01c8b62-5cb2-4a95-b7cc-3487f99e2f63",
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive",
                    "x-requested-with": "XMLHttpRequest",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36",
                    "content-type": "application/x-www-form-urlencoded"
                }
            }).then((res) => {
                resolve(res.data)
            })
        })
    }
    // await res
    let result = await requestAsync()
    res.status(200).json(result);

}

