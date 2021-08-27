"use strict";

const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(20),
          unique: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(50),
          unique: true,
          allowNull: false,
        },
        isCadet: {
          type: DataTypes.BOOLEAN,
        },
        careerYears: {
          type: DataTypes.INTEGER,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        modelName: "user",
        tableName: "users",
        sequelize: sequelize,
      }
    );
  }
};
