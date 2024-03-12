import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Provider",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      razonsocial: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fantasia: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
