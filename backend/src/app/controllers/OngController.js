import * as Yup from 'yup';

import Ong from '../models/Ong';

class OngController {
    async index(req, res) {
        const ongs = await Ong.findAll();

        return res.json(ongs);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            whatsapp: Yup.string().required(),
            city: Yup.string().required(),
            uf: Yup.string().max(2).required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                message: 'validation fails',
            });
        }

        const ongExists = await Ong.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (ongExists) {
            return res.status(404).json({
                message: 'user already exists',
            });
        }

        const { id } = await Ong.create(req.body);

        return res.json({ id });
    }
}

export default new OngController();
