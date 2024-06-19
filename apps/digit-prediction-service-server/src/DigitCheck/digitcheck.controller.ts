import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DigitCheckService } from "./digitcheck.service";
import { CheckDigitInput } from "../digitCheck/CheckDigitInput";
import { CheckDigitOutput } from "../digitCheck/CheckDigitOutput";

@swagger.ApiTags("digitChecks")
@common.Controller("digitChecks")
export class DigitCheckController {
  constructor(protected readonly service: DigitCheckService) {}

  @common.Post("/check-digit")
  @swagger.ApiOkResponse({
    type: CheckDigitOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckDigit(
    @common.Body()
    body: CheckDigitInput
  ): Promise<CheckDigitOutput> {
        return this.service.CheckDigit(body);
      }
}
