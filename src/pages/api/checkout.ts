import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import type { NextApiRequest, NextApiResponse } from 'next'

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN!,
});



type Data =
    | { name: string }
    | { error: string }
    | any
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'POST') {
        const { company } = req.body;
        const URL = 'https://hey-funding.vercel.app/'

        try {
            const preference: CreatePreferencePayload = {
                items: [{
                    title: company.title,
                    unit_price: 100000,
                    quantity: 1
                }],
                auto_return: 'approved',
                back_urls: {
                    success: `${URL}`,
                    failure: `${URL}`,
                },
            }
            const response = await mercadopago.preferences.create(preference)
            return res.status(200).send({ url: response.body.init_point, preferenceId: response.body.id });
        } catch (error) {
            res.status(400).json({ error: 'Bad request' });
        }

    } else {
        res.status(400).json({ error: 'Bad request' });
    }

}

export default handler