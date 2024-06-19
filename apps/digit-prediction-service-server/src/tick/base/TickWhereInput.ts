/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PredictionWhereUniqueInput } from "../../prediction/base/PredictionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class TickWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PredictionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PredictionWhereUniqueInput)
  @IsOptional()
  @Field(() => PredictionWhereUniqueInput, {
    nullable: true,
  })
  prediction?: PredictionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  tickDigit?: IntNullableFilter;
}

export { TickWhereInput as TickWhereInput };