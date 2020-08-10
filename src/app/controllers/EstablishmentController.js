import * as Yup from 'yup';
import { cnpj as cnpjValidator } from 'cpf-cnpj-validator';

import Establishment from '../models/Establishment';

class EstablishmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().min(10).max(11).required(),
      description: Yup.string(),
      cnpj: Yup.string()
        .test('cnpj', 'CNPJ is invalid', (value) =>
          cnpjValidator.isValid(value)
        )
        .min(14)
        .max(14)
        .required(),
      cep: Yup.string().min(8).max(8).required(),
      address: Yup.string().required(),
      neighborhood: Yup.string(),
      locality: Yup.string(),
      complement: Yup.string(),
      number: Yup.number().positive().required(),
    });

    if (!(await schema.isValid(req))) {
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
