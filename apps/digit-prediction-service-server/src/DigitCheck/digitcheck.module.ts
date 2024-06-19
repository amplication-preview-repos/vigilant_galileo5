import { Module } from "@nestjs/common";
import { DigitCheckService } from "./digitcheck.service";
import { DigitCheckController } from "./digitcheck.controller";
import { DigitCheckResolver } from "./digitcheck.resolver";

@Module({
  controllers: [DigitCheckController],
  providers: [DigitCheckService, DigitCheckResolver],
  exports: [DigitCheckService],
})
export class DigitCheckModule {}
