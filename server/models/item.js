import { Model, Op } from 'sequelize';

export default function (sequelize, DataTypes) {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      Title: DataTypes.STRING,  
      Text: DataTypes.TEXT,
      Name: DataTypes.TEXT,
      VideoLink: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
}
