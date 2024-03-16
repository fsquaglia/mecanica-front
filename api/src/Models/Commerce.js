import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Commerce",
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
        allowNull: false,
        unique: true,
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
      instagram: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isMyCommerce: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
