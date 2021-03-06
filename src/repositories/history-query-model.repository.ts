import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HistoryQueryDataSourceDataSource} from '../datasources';
import {HistoryQueryModel, HistoryQueryModelRelations} from '../models';

export class HistoryQueryModelRepository extends DefaultCrudRepository<
  HistoryQueryModel,
  typeof HistoryQueryModel.prototype.id,
  HistoryQueryModelRelations
> {
  constructor(
    @inject('datasources.HistoryQueryDataSource') dataSource: HistoryQueryDataSourceDataSource,
  ) {
    super(HistoryQueryModel, dataSource);
  }
}
