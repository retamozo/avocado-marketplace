import {
    IncomingMessage,
    ServerResponse
} from "http"
import { DB } from "database";
import { NextApiRequest, NextApiResponse } from "next";

const getAllAvos = async (req: NextApiRequest, res: NextApiResponse) => {

    // This will not fail though ...
    try {
        const db = new DB()
        const allAvos = await db.getAll()
        const length = allAvos.length
        res.status(200).json({
            data: allAvos,
            length
        })
    }

    catch (err) {
        console.log("Error", err);
    }
}

export default getAllAvos;