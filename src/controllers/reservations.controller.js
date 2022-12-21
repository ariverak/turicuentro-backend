import models from '../models'
import moment from 'moment';

const { Reservation, Customer, Cabin } = models;

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getReservations = async (req, res) => {
    const { month } = req.query;
    const startDate = moment(month, 'MM').startOf('month').toDate();
    const endDate = moment(month, 'MM').endOf('month').toDate();

    const reservations = await Reservation.findAll({
        include: [Customer, Cabin],
        where: {
            startDate: {
                [Op.gte]: startDate
            },
            endDate: {
                [Op.lte]: endDate
            }
        }
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