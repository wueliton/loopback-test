import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HistoryQueryModel extends Entity {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Title: string;

  @property({
    type: 'number',
    required: true,
  })
  Year: number;

  @property({
    type: 'string',
    required: true,
  })
  imdbID: string;

  @property({
    type: 'string',
    required: true,
  })
  Type: string;

  @property({
    type: 'string',
    required: true,
  })
  Poster: string;

  constructor(data?: Partial<HistoryQueryModel>) {
    super(data);
  }
}

export interface HistoryQueryModelRelations {
  // describe navigational properties here
}

export type HistoryQueryModelWithRelations = HistoryQueryModel &
  HistoryQueryModelRelations;
