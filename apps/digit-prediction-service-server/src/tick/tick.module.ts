import { Module } from "@nestjs/common";
import { TickModuleBase } from "./base/tick.module.base";
import { TickService } from "./tick.service";
import { TickController } from "./tick.controller";
import { TickResolver } from "./tick.resolver";

@Module({
  imports: [TickModuleBase],
  controllers: [TickController],
  providers: [TickService, TickResolver],
  exports: [TickService],
})
export class TickModule {}
