import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class PersonSchema {
  @Field()
  name: string

  @Field()
  height: string

  @Field()
  mass: string

  @Field()
  gender: string

  @Field()
  homeworld: string
}