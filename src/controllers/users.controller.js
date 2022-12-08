import models from '../models';
import { signJWT } from "../utils/jwt";

const bcrypt = require("bcrypt");
const { User } = models;

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        email,
      },
    });
    if (!user) return res.status(404).json({ message: "User doesn't exist" });

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = signJWT(user.id);
    res.status(200).json({ token });

  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (req, res) => {
  const { name, email } = req.body;
  const password = bcrypt.hashSync(req.body.password, 10);
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user?.email) {
      await User.create({
        name,
        email,
        password,
      });
      res.status(201).json({ message: 'User created' });

    } else {
      res.status(401).json({ message: "The email already exists" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      where: {
        id: req.userId
      },
    });
    console.log(user)
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};