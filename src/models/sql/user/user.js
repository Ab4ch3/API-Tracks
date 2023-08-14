import { sequelize } from "../../../databases/sqlServer";
import { DataTypes } from "sequelize";

const user = sequelize.define(
  //Nombre tabla
  "users",
  {
    //Datos que llevara la tabla
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  }
);

export default user;
