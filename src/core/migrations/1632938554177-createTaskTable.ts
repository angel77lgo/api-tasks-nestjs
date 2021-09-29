import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTaskTable1632938554177 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableTask = new Table({name: 'tasks', columns: [
            {
                name: 'id',
                type: 'VARCHAR',
                length: '36',
                isPrimary: true,
                generationStrategy: 'uuid'
            },
            {
                name: 'name',
                type: 'VARCHAR',
                length: '50'
            },
            {
                name: 'description',
                type: 'VARCHAR',
                length: '250'
            }
        ]});

        await queryRunner.createTable(tableTask);


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableTask = await queryRunner.getTable('tasks');

        if (undefined !== tableTask){
            await queryRunner.dropTable(tableTask);
        }
    }

}
