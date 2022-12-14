import models from '../models'

const Cabin = models.cabin;

export const getCabins = async (req, res) => {
    const cabins = await Cabin.findAll();
    return res.json(cabins);
};

export const createCabin = async (req, res) => {
    const { name, price, color } = req.body;
    await Cabin.create({
        name,
        price,
        color
    });
    return res.status(201).json({ message: 'Cabin created' });
};
export const deleteCabin = async (req, res) => {
    const { id } = req.params;
    await Cabin.destroy({
        where: { id }
    });
    return res.status(200).json({ message: 'Cabin deleted' });
}

export const updateCabin = async (req, res) => {
    const { id } = req.params;
    const { name, price, color } = req.body;
    await Cabin.update({
        name,
        price,
        color
    }, {
        where: { id }
    });
    return res.status(200).json({ message: 'Cabin updated' });
}