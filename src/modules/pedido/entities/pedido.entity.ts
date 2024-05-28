import { Cliente } from "../../cliente/entities/cliente.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Pedido_producto } from "./pedidoproducto.entity"

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha:string;

    @Column()
    estado:string;

    @Column()
    observaciones:string;

    @ManyToOne(()=>Cliente)
    cliente:Cliente;

    @OneToMany(()=>Pedido_producto,pedprod=>pedprod.pedido)
    pedidoProducto: Pedido_producto[];
}
