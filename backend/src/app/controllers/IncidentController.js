import * as Yup from 'yup';

import Incident from '../models/Incident';
import Ong from '../models/Ong';

class IncidentController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const { count, rows: incidents } = await Incident.findAndCountAll({
            limit: 5,
            offset: (page - 1) * 5,
            include: [
                {
                    model: Ong,
                    as: 'ong',
                    attributes: ['name', 'email', 'whatsapp'],
                },
            ],
        });

        res.header('X-Total-Count', count);

        return res.json(incidents);
    }

    async show(req, res) {
        const schema = Yup.object().shape({
            authorization: Yup.string().required(),
        });

        if (!(await schema.isValid(req.headers))) {
            return res.status(400).json({
                message: 'validation fails',
            });
        }

        const ong_id = req.headers.authorization;
        const { page = 1 } = req.query;

        const incidents = await Incident.findAll({
            where: {
                ong_id,
            },
            limit: 5,
            offset: (page - 1) * 5,
        });

        if (!incidents) {
            res.status(404).json({
                message: 'this ong, has no incidents',
            });
        }

        return res.json(incidents);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            value: Yup.number().required(),
        });

        const auth = Yup.object.shape({
            authorization: Yup.string().required(),
        });

        if (
            !(await schema.isValid(req.body)) &&
            !(await auth.isValid(req.headers))
        ) {
            return res.status(400).json({
                message: 'validation fails',
            });
        }

        const ong_id = req.headers.authorization;

        const data = {
            ...req.body,
            ong_id,
        };

        const incident = await Incident.create(data);

        return res.json(incident);
    }

    async delete(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.params))) {
            return res.status(400).json({
                message: 'validation fails',
            });
        }

        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await Incident.findByPk(id);

        if (ong_id !== incident.ong_id) {
            return res.status(400).json({
                message: 'you has not permission',
            });
        }

        if (!incident) {
            return res.status(404).json({
                message: 'Incident not found',
            });
        }

        await incident.destroy();

        return res.json({
            message: 'Incident was deleted',
        });
    }
}

export default new IncidentController();
