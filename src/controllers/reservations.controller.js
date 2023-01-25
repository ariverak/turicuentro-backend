import models from '../models'
import moment from 'moment';
import { Op } from 'sequelize';
import { sendMail } from '../services/mail';

const Reservation = models.reservation;
const Customer = models.customer;
const Cabin = models.cabin;

export const getReservations = async (req, res) => {
    const { startDate: startMonth, endDate: endMonth } = req.query;
    const start = moment(startMonth, 'YYYY-MM-DD').toDate();
    const end = moment(endMonth, 'YYYY-MM-DD').toDate();

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
    const invalidReservation = await Reservation.findAll({
        where: {
            cabinId,
            [Op.or]: [{
                startDate: {
                    [Op.between]: [startDate, endDate]
                }
            }, {
                endDate: {
                    [Op.between]: [startDate, endDate]
                }
            }]
        }
    });

    if (invalidReservation.length > 0) {
        return res.status(201).json({ message: 'The reservation of this cabin is already in the date range' });
    }
    
    await Reservation.create({
        customerId, cabinId, tinaja, startDate, endDate, amount, discount, comments, message
    });
    //await sendMail();
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