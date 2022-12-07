import models from '../models';

const { Setting } = models;

export const getSettings = async (req, res) => {
  const settings = await Setting.findAll();
  return res.json(settings);
};

export const createSetting = async (req, res) => {
  const { key, value } = req.body;
  await Setting.create({ key, value });
  return res.status(201).json({ message: 'Setting created' });
};

export const deleteSetting = async (req, res) => {
  const { id } = req.params;
  await Setting.destroy({
    where: { id }
  });
  return res.status(200).json({ message: 'Setting deleted' });
}

export const updateSetting = async (req, res) => {
  const { id } = req.params;
  const { key, value } = req.body;
  await Setting.update({
    key,
    value,
  }, {
    where: { id }
  });
  return res.status(200).json({ message: 'Setting updated' });
}
