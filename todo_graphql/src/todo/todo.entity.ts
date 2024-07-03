import { Entity, PrimaryColumn, Column,ObjectIdColumn  } from "typeorm";
import { v4 as uuid4 } from 'uuid';
@Entity('todo')
export class Todo{
    @ObjectIdColumn()
    id: string;

    @PrimaryColumn()
    todo_id: string = uuid4();

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column({
        type: 'timestamp',
        default: () => 'NOW()'
    })
    created_at: Date;

}