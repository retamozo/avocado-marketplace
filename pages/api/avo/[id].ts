import {
    NextApiRequest, NextApiResponse
} from "next"
import { DB } from "database";

const getAvoById = async (req: NextApiRequest, res: NextApiResponse) => {

    // This will not fail though ...
    try {
        const db = new DB()
        const id = req.query.id;
        const avo = await db.getById(id as string)

        res.status(200).json({ data: avo })
    }

    catch (err) {
        console.log("Error", err);
    }
}

export default getAvoById;