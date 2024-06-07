import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class OrderRepository {
    private orders: Array<Order> = [];
    constructor(private dataSource: StaticDataSource) { }
    getOrders(): Array<Order> {
        return this.orders;
    }
    saveOrder(order : Order){
        return this.dataSource.saveOrder(order);
    }
}