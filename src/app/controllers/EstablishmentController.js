import * as Yup from 'yup';

import Establishment from '../models/Establishment';

class EstablishmentController {
  async store(req, res) {
    const schema = Yup.object().shape({});

    if (!(await schema.isValid())) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      name,
      phone,
      description,
      cnpj,
      address,
      neighborhood,
      locality,
      complement,
      number,
    } = await Establishment.create(req.body);

    return res.json({
      id,
      name,
      phone,
      description,
      cnpj,
      address,
      neighborhood,
      locality,
      complement,
      number,
    });
  }
}

export default new EstablishmentController();
