/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TickService } from "../tick.service";
import { TickCreateInput } from "./TickCreateInput";
import { Tick } from "./Tick";
import { TickFindManyArgs } from "./TickFindManyArgs";
import { TickWhereUniqueInput } from "./TickWhereUniqueInput";
import { TickUpdateInput } from "./TickUpdateInput";

export class TickControllerBase {
  constructor(protected readonly service: TickService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tick })
  async createTick(@common.Body() data: TickCreateInput): Promise<Tick> {
    return await this.service.createTick({
      data: {
        ...data,

        prediction: data.prediction
          ? {
              connect: data.prediction,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        prediction: {
          select: {
            id: true,
          },
        },

        tickDigit: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tick] })
  @ApiNestedQuery(TickFindManyArgs)
  async ticks(@common.Req() request: Request): Promise<Tick[]> {
    const args = plainToClass(TickFindManyArgs, request.query);
    return this.service.ticks({
      ...args,
      select: {
        createdAt: true,
        id: true,

        prediction: {
          select: {
            id: true,
          },
        },

        tickDigit: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tick })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tick(
    @common.Param() params: TickWhereUniqueInput
  ): Promise<Tick | null> {
    const result = await this.service.tick({
      where: params,
      select: {
        createdAt: true,
        id: true,

        prediction: {
          select: {
            id: true,
          },
        },

        tickDigit: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tick })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTick(
    @common.Param() params: TickWhereUniqueInput,
    @common.Body() data: TickUpdateInput
  ): Promise<Tick | null> {
    try {
      return await this.service.updateTick({
        where: params,
        data: {
          ...data,

          prediction: data.prediction
            ? {
                connect: data.prediction,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          prediction: {
            select: {
              id: true,
            },
          },

          tickDigit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tick })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTick(
    @common.Param() params: TickWhereUniqueInput
  ): Promise<Tick | null> {
    try {
      return await this.service.deleteTick({
        where: params,
        select: {
          createdAt: true,
          id: true,

          prediction: {
            select: {
              id: true,
            },
          },

          tickDigit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}