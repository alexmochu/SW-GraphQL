import { DocumentNode, useQuery } from '@apollo/client';
import { GET_PERSON } from '../graphql/queries';
import { IPeople, IPerson } from '../types/people';

export function usePeopleQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<IPeople>(gqlQuery);
  return { loading, error, data };
}

export function usePersonQuery(name: string) {
  const { loading, error, data } = useQuery<IPerson>(GET_PERSON, {
    variables: { name: name }
  });
  return { loading, error, data };
}
