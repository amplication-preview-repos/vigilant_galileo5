import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("CheckDigitOutputObject")
class CheckDigitOutput {
    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    result!: boolean;
}

export { CheckDigitOutput as CheckDigitOutput };