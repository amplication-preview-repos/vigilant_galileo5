import * as graphql from "@nestjs/graphql";
import { TickResolverBase } from "./base/tick.resolver.base";
import { Tick } from "./base/Tick";
import { TickService } from "./tick.service";

@graphql.Resolver(() => Tick)
export class TickResolver extends TickResolverBase {
  constructor(protected readonly service: TickService) {
    super(service);
  }
}
