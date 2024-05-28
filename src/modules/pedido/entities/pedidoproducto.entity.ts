import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity('pedido_producto')
export class Pedido_producto{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    pedidoId:string;

    @Column()
    productoId:string;

    @Column()
    cantidad:string;

    @ManyToOne(()=>Pedido,(ped)=>ped.pedidoProducto)
    pedido:Pedido;

    @ManyToOne(()=>Producto,(ped)=>ped.pedidoProducto)
    producto:Producto;
}