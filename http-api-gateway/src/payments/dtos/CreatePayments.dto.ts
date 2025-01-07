import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePaymentDto {
    @ApiProperty({
        description: 'amount of payments',
        type: Number,
        example: 10
    })
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @ApiProperty({
        description: 'user ID',
        type: String,
        example: 'xxxx'
    })
    @IsNotEmpty()
    userId: string;
}