import * as graphql from "@nestjs/graphql";
import { CheckDigitInput } from "../digitCheck/CheckDigitInput";
import { CheckDigitOutput } from "../digitCheck/CheckDigitOutput";
import { DigitCheckService } from "./digitcheck.service";

export class DigitCheckResolver {
  constructor(protected readonly service: DigitCheckService) {}

  @graphql.Mutation(() => CheckDigitOutput)
  async CheckDigit(
    @graphql.Args()
    args: CheckDigitInput
  ): Promise<CheckDigitOutput> {
    return this.service.CheckDigit(args);
  }
}
