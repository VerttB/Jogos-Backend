import { Request, Response} from "express"


export const getSignUp = async (req:Request, res: Response) => {
    res.send({"msg": "sem registro"})
}

export const postSignUp = async (req:Request, res: Response) => {
    res.send({"msg": "sem registro"})
}

export const getSignIn = async (req:Request, res: Response) => {
    res.send({"msg": "sem login"})
}

export const postSignIn = async (req:Request, res: Response) => {
    res.send({"msg": "sem registro"})
}

export const getLogout = async (req:Request, res: Response) => {
    res.send({"msg": "sem registro"})
}