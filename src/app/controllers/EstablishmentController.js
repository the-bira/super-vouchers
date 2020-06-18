import * as Yup from 'yup';

import Establishment from '../models/Establishment';

class EstablishmentController {
  async store(req, res) {
    return res.json(req);
  }
}

export default new EstablishmentController();
