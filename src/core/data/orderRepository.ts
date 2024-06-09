import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Array<Order> = [];
    private loaded: boolean = false;
    constructor(private dataSource: RestDataSource) { }
    getOrders(): Array<Order> {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    saveOrder(order: Order) {
        this.loaded = false;
        return this.dataSource.saveOrder(order);
    }
    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order)
            .subscribe(order => {
                this.orders.splice(this.orders.findIndex(o => o.id === order.id), 1, order);
            })
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).
            subscribe(order => {
                this.orders.splice(this.orders.findIndex(o => o.id === order.id), 1)
            })
    }

}