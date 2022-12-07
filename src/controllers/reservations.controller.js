import models from '../models'

const { Reservation, Customer, Cabin } = models;

export const getReservations = async (req, res) => {
    const reservations = await Reservation.findAll({
        include: [Customer, Cabin]
    });
    return res.json(reservations);
};

export const createReservation = async (req, res) => {
    const { customerId, cabinId, tinaja, startDate, endDate, amount, discount, comments, message } = req.body;
    await Reservation.create({
        customerId, cabinId, tinaja, startDate, endDate, amount, discount, comments, message
    });
    return res.status(201).json({ message: 'Reservation created' });
};

export const deleteReservation = async (req, res) => {
    const { id } = req.params;
    await Reservation.destroy({
        where: { id }
    });
    return res.status(200).json({ message: 'Reservation deleted' });
}

export const updateReservation = async (req, res) => {
    const { id } = req.params;
    const { customerId, cabinId, tinaja, startDate, endDate, amount, discount, comments, message } = req.body;
    await Reservation.update({
        customerId, cabinId, tinaja, startDate, endDate, amount, discount, comments, message
    }, {
        where: { id }
    });
    return res.status(200).json({ message: 'Reservation updated' });
}