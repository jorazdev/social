import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class Timestamp {
    @CreateDateColumn({
        update: false,
        nullable: true
    })
    created: Date;

    @UpdateDateColumn({
        nullable: true
    })
    updated: Date;

    @DeleteDateColumn({
        nullable: true
    })
    deleted: Date;
}