import knex from "../database/knex/knex.js";
import bcrypt from "bcryptjs";

export default class UserController {
  async getUser(req, res, next) {
    const { id } = req.body;

    try {
      const user = await knex("users").where({ id }).first();

      if (!user) {
        throw new Error(`No users with id ${id}`);
      }

      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async createUser(req, res, next) {
    const { name, email, password, levelId } = req.body;

    try {
      const checkEmailExist = await knex("users").where({ email }).first();
      if (checkEmailExist) {
        throw new Error("Email already registered");
      }

      const hashPassword = await bcrypt.hash(password, 8);

      await knex("users").insert({
        name,
        email,
        password: hashPassword,
        levelId,
      });
      res.json();
    } catch (err) {
      next(err);
    }
  }
}
