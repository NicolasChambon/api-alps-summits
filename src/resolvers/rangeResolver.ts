import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Range } from "../entities/Range";
import { ranges } from "../data/ranges";

@Resolver(() => Range)
export class RangeResolver {
  @Query(() => [Range])
  getRanges(): Range[] {
    return ranges;
  }

  @Mutation(() => Range)
  addRange(@Arg("name") name: string): Range {
    const newRange = {
      id: ranges.length + 1,
      name,
    };
    ranges.push(newRange);
    return newRange;
  }
}
