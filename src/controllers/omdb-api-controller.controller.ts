// Uncomment these imports to begin using these cool features!
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {get, param} from '@loopback/rest';
import {HistoryQueryModelRepository} from '../repositories';
import {OmdbApiServiceReq} from '../services';

export class OmdbApiControllerController {
  constructor(
    @inject('services.OmdbApiService')
    private omdbApiServiceReq: OmdbApiServiceReq,
    @repository(HistoryQueryModelRepository)
    public historyQueryModelRepository: HistoryQueryModelRepository,
  ) {}

  @get('/query/{therm}')
  async getone(@param.path.string('therm') therm: string) {
    const data = await this.omdbApiServiceReq.getrestdata(therm);
    data.Search.map(item => {
      return this.historyQueryModelRepository.create(item);
    });

    return data;
  }
}
