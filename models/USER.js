const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    USER_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMAIL: {
      type: DataTypes.STRING(89),
      allowNull: false,
      comment: "유저 이메일"
    },
    USERNAME: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "유저 닉네임"
    },
    PASSWORD: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "유저 패스워드"
    },
    CREATED_REG: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "유저 생성일"
    },
    PROFILE_IMG: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "프로필 사진데이터"
    }
  }, {
    sequelize,
    tableName: 'USER',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
