import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models/user.model';
import {inject} from '@loopback/core';
import {DbDataSource} from '../datasources';

class UserRelations {
}

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(User, dataSource);
  }
}