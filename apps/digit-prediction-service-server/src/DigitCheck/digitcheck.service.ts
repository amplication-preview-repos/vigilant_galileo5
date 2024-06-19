import { Injectable } from "@nestjs/common";
import { CheckDigitInput } from "../digitCheck/CheckDigitInput";
import { CheckDigitOutput } from "../digitCheck/CheckDigitOutput";

@Injectable()
export class DigitCheckService {
  constructor() {}
  async CheckDigit(args: CheckDigitInput): Promise<CheckDigitOutput> {
    throw new Error("Not implemented");
  }
}
