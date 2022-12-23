import models from '../models';

const Customer = models.customer;

export const getCustomers = async (req, res) => {
    const customers = await Customer.findAll();
    return res.json(customers);
};

export const createCustomer = async (req, res) => {
    const { fullname, email, phone } = req.body;
    await Customer.create({
        fullname,
        email,
        phone
    });
    return res.status(201).json({ message: 'Customer created' });
};

export const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    await Customer.destroy({
        where: { id }
    });
    return res.status(200).json({ message: 'Customer deleted' });
}

export const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { fullname, email, phone } = req.body;
    await Customer.update({
        fullname,
        email,
        phone
    }, {
        where: { id }
    });
    return res.status(200).json({ message: 'Customer updated' });
}
