import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Summit } from "../entities/Summit";
import { summits } from "../data/summits";
import { ranges } from "../data/ranges";
import { AddSummitInput } from "../inputs/SummitInput";

@Resolver(() => Summit)
export class SummitResolver {
  @Query(() => [Summit])
  getSummits(): Summit[] {
    return summits;
  }

  @Query(() => [Summit])
  getSummitsByRangeId(@Arg("rangeId") rangeId: number): Summit[] {
    return summits.filter((summit) => summit.range.id === rangeId);
  }

  @Mutation(() => Summit)
  addSummit(@Arg("data") data: AddSummitInput): Summit {
    const range = ranges.find((range) => range.id === data.rangeId);

    if (!range) {
      throw new Error(`Range with ID ${data.rangeId} not found`);
    }

    const newSummit = {
      id: summits.length + 1,
      name: data.name,
      altitude: data.altitude,
      range,
    };

    summits.push(newSummit);

    return newSummit;
  }
}
