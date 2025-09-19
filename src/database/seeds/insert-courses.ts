import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "Git" },
        { name: "Angular" },
        { name: "React" },
        { name: "PHP" },
        { name: "Figma" },
        { name: "C#" },
        { name: "Ruby" },
        { name: "Go" },
        { name: "ChatGPT" },
    ]);
};
