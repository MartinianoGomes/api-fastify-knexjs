import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("course_modules", (table) => {
        table.increments("id").primary();
        table.integer("course_id").unsigned().notNullable()
            .references("id").inTable("courses")
            .onDelete("CASCADE");
        table.text("title").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("course_modules");
}

