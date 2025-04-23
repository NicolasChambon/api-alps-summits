import { Field, ID, ObjectType } from "type-graphql";
import { Range } from "./Range";

@ObjectType()
export class Summit {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  altitude!: number;

  @Field(() => Range)
  range!: Range;
}
