import { Query, Resolver } from "type-graphql";
import { Range } from "../entities/Range";
import { ranges } from "../data/ranges";

@Resolver(() => Range)
export class RangeResolver {
  @Query(() => [Range])
  getRanges(): Range[] {
    return ranges;
  }
}
