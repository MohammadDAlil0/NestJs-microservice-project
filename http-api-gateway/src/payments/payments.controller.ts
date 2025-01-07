import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/CreatePayments.dto";

@Controller('payments')
export class PaymentsController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Post()
    createPayments(@Body() createPaymentDto: CreatePaymentDto) {
        // Emit doesn't send back any response
        console.log('payemnt gateway');
        return this.natsClient.emit('createPayment', createPaymentDto);
    }
}