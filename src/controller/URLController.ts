import { Request, Response } from "express";
import shortid from "shortid";
import { config } from "../config/Constants";
import URLModel from "../model/URL";

export class URLController {
    public async shorthenURL(req: Request, res: Response): Promise<void> {
        try {
            const { originURL } = req.body
            const url = await URLModel.findOne({ originURL })
            if (url) {
                res.json(url)
                return
            }
            const hash = shortid.generate()
            const shortUrl = `${config.API_URL}/${hash}`
            const newURl = await URLModel.create({ hash, originURL, shortUrl })
            res.json(newURl)
        } catch (err) {
            console.log(err)
        }
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params

        const url = await URLModel.findOne({ hash })

        if (url) {
            res.redirect(url.originURL)
            return
        }

        res.status(404).json({ message: "URL not found" })
    }
}