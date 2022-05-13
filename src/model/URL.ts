import { getModelForClass, prop } from '@typegoose/typegoose';

class URL {
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    originURL: string

    @prop({ required: true })
    shortUrl: string
}

const URLModel = getModelForClass(URL);

export default URLModel;