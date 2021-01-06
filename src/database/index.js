import Sequelize from 'sequelize';

import User from '../app/models/User';

const models = [User];

import databaseConfig from '../config/database';

class Database{
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
