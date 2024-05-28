import { Pedido_producto } from "../../pedido/entities/pedidoproducto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    imagen: string;

    @Column()
    descripcion: string;

    @Column()
    estado: string;

    @ManyToOne(()=>Categoria, (cat)=>cat.porducto)
    categoria: Categoria;

    @OneToMany(()=>Pedido_producto, pedprod=>pedprod.producto)
    pedidoProducto: Pedido_producto[];
}

