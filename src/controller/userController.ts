import { Request, Response} from "express"


const getUser = async (req: Request, res: Response) => {
    const userId = req.params.id
    res.send({userId})
}


