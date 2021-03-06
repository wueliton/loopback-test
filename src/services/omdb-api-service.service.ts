import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OmdbApiDataSourceDataSource} from '../datasources';

export interface OmdbApiService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  Search: [
    {
      Title: string;
      Year: number;
      imdbID: string;
      Type: string;
      Poster: string;
    },
  ];
  totalResults: number;
  Response: boolean;
}

export interface OmdbApiServiceReq {
  getrestdata(therm: string): Promise<OmdbApiService>;
}

export class OmdbApiServiceProvider implements Provider<OmdbApiService> {
  constructor(
    // OmdbApiDataSource must match the name property in the datasource json file
    @inject('datasources.OmdbApiDataSource')
    protected dataSource: OmdbApiDataSourceDataSource = new OmdbApiDataSourceDataSource(),
  ) {}

  value(): Promise<OmdbApiService> {
    return getService(this.dataSource);
  }
}
