import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TickServiceBase } from "./base/tick.service.base";

@Injectable()
export class TickService extends TickServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
