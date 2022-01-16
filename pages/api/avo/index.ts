import {
    IncomingMessage,
    ServerResponse
} from "http"
import { DB } from "database";

const getAllAvos = async (req: IncomingMessage, res: ServerResponse) => {

    // This will not fail though ...
    try {
        const db = new DB()
        const allAvos = await db.getAll()
        const length = allAvos.length
        res.statusCode = 200
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify({
            data: allAvos,
            length
        }))
    }

    catch (err) {
        console.log("Error", err);
    }
}

export default getAllAvos;