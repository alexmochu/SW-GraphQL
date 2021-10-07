import { Query, Resolver, Arg } from 'type-graphql'
import { PersonSchema } from '../schemas/people'
import axios from 'axios';

interface People {
    count: Number;
    next: Number;
    previous: String;
    results: Person[];
}

interface Person {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string
}

const api= `https://swapi.dev`

@Resolver(PersonSchema)
export class StarWarsResolver {
  private todos: PersonSchema[] = []

  @Query((returns) => [PersonSchema], { nullable: true })
  async getPeople(): Promise<PersonSchema[]> {

    const { results } = await axios.get<People>(`${api}/api/people/${''}`)
        .then(response => {
            return response.data
        });

    this.todos.push(...results)
    return this.todos
  }

  @Query((returns) => [PersonSchema], { nullable: true })
  async getPerson(@Arg("name") name: string): Promise<PersonSchema[]> {
    const { results } = await axios.get<People>(`${api}/api/people/?search=${name}`)
        .then(response => {
            return response.data
        });
    return results
  }

  @Query((returns) => [PersonSchema], { nullable: true })
  async getPagination(@Arg("page") page: number): Promise<PersonSchema[]> {
    const { results } = await axios.get<People>(`${api}/api/people/?page=${page}`)
        .then(response => {
            return response.data
        });
    return results
  }

}