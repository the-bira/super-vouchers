import * as Yup from 'yup';

import Voucher from '../models/Voucher';

class VoucherController {
  async store(req, res) {
    const schema = Yup.object().shape({});

    if (!(await schema.isValid())) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const {
      id,
      title,
      rules,
      validity,
      price,
      regularPrice,
    } = await Voucher.create(req.body);

    return res.json({
      id,
      title,
      rules,
      validity,
      price,
      regularPrice,
    });
  }
}

export default new VoucherController();
