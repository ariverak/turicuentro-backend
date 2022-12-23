import models from '../models';
const Prepaid = models.prepaid
const Reservation = models.reservation

export const getPrepaids = async (req, res) => {
  const prepaids = await Prepaid.findAll({
    include: [Reservation]
  });
  return res.json(prepaids);
};

export const createPrepaid = async (req, res) => {
  const { amount, date, reservationId } = req.body;
  await Prepaid.create({ amount, date, reservationId });
  return res.status(201).json({ message: 'Prepaid created' });
};

export const deletePrepaid = async (req, res) => {
  const { id } = req.params;
  await Prepaid.destroy({
    where: { id }
  });
  return res.status(200).json({ message: 'Prepaid deleted' });
}

export const updatePrepaid = async (req, res) => {
  const { id } = req.params;
  const { amount, date, reservationId } = req.body;
  await Prepaid.update({
    amount,
    date,
    reservationId
  }, {
    where: { id }
  });
  return res.status(200).json({ message: 'Prepaid updated' });
}
