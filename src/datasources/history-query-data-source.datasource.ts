import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'HistoryQueryDataSource',
  connector: 'mongodb',
  url: 'mongodb+srv://paulo:yHDmu2p7Uuvw0Le5@cluster0.wghbx.mongodb.net/MovieHistory?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HistoryQueryDataSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'HistoryQueryDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.HistoryQueryDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
