import { InputType, Field, Int } from "type-graphql";

@InputType()
export class SummitInput {
  @Field()
  name!: string;

  @Field(() => Int)
  altitude!: number;

  @Field(() => Int)
  rangeId!: number;
}
