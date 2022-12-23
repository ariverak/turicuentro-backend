import models from '../models'
import moment from 'moment';
import { Op } from 'sequelize';

const Reservation = models.reservation;
const Customer = models.customer;
const Cabin = models.cabin;

export const getReservations = async (req, res) => {
    const { startDate, endDate } = req.query;
    const start = moment(startDate, 'YYYY-MM-DD').toDate();
    const end = moment(endDate, 'YYYY-MM-DD').toDate()

    const reservations = await Reservation.findAll({
        include: [Customer, Cabin],
        where: {
            startDate: {
                [Op.gte]: start
            },
            endDate: {
                [Op.lte]: end
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