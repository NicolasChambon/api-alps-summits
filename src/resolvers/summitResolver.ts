import { Query, Resolver } from "type-graphql";
import { Summit } from "../entities/Summit";
import { summits } from "../data/summits";

@Resolver(() => Summit)
export class SummitResolver {
  @Query(() => [Summit])
  getSummits(): Summit[] {
    return summits;
  }
}
