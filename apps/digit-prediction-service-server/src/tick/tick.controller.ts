import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TickService } from "./tick.service";
import { TickControllerBase } from "./base/tick.controller.base";

@swagger.ApiTags("ticks")
@common.Controller("ticks")
export class TickController extends TickControllerBase {
  constructor(protected readonly service: TickService) {
    super(service);
  }
}
