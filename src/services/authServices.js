import models from "../models/nosql/index.js";
import { encrypt, compare } from "../utils/handlePassword.js";
import { tokenSign, verifyToken } from "../utils/handleJWT.js";
import { check } from "express-validator";
export default {
  register: async (newRegister) => {
    const password = await encrypt(newRegister.password);
    // Esta creando un nuevo objeto con la contrase#a encriptada
    const body = { ...newRegister, password };
    // Se envia el nuevo registro a la base de datos
    const newUser = await models.user.create(body);
    // Creamos la data con Firmando el token con el usuario creado
    const data = {
      token: await tokenSign(newUser.password),
      newUser,
    };
    return data;
  },
  login: async (user) => {
    let selectedUser = await models.user.findOne({ email: user.email });

    let checkPassword = await compare(user.password, selectedUser.password);

    if (!checkPassword) {
      return { error: "PASSWORD_INVALID" };
    }

    const data = {
      token: await tokenSign(selectedUser),
      dataUser: selectedUser,
    };

    return data;
  },
};
