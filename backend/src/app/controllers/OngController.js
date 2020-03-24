import Ong from '../models/Ong';

class OngController {
    async index(req, res) {
        const ongs = await Ong.findAll();

        return res.json(ongs);
    }

    async store(req, res) {
        const ongExists = await Ong.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (ongExists) {
            return res.status(404).json({
                message: 'user already exists',
            });
        }

        const ong = await Ong.create(req.body);

        return res.json(ong);
    }
}

export default new OngController();
