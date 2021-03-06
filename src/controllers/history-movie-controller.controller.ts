import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, response} from '@loopback/rest';
import {HistoryQueryModel} from '../models';
import {HistoryQueryModelRepository} from '../repositories';

export class HistoryMovieControllerController {
  constructor(
    @repository(HistoryQueryModelRepository)
    public historyQueryModelRepository: HistoryQueryModelRepository,
  ) {}

  @get('/history')
  @response(200, {
    description: 'Array of HistoryQueryModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HistoryQueryModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HistoryQueryModel) filter?: Filter<HistoryQueryModel>,
  ): Promise<HistoryQueryModel[]> {
    return this.historyQueryModelRepository.find(filter);
  }
}
