import fastify from "fastify";
import { knex } from "./database/knex";

const app = fastify()

interface Course {
  id: number,
  name: string
}

interface CourseModule {
  id: number,
  name: string,
  course_id: number
}

app.get('/courses', async (request, reply) => {
  const courses = await knex("courses").select().orderBy("name")
  return reply.status(201).send(courses)
})

app.post('/courses', async (request, reply) => {
  const { name } = request.body as Course
  await knex("courses").insert({ name })
  return reply.status(201).send({
    message: "Curso adicionado com sucesso"
  })
})

app.delete('/courses/:id', async (request, reply) => {
  const { id } = request.params as Course
  await knex("courses").delete().where({ id })
  return reply.status(201).send({
    message: "Curso deletado com sucesso!"
  })
})

app.put('/courses/:id', async (request, reply) => {
  const { id } = request.params as Course
  const { name } = request.body as Course
  await knex("courses").update({ name }).where({ id })
  return reply.status(201).send({
    message: "Curso atualizado com sucesso"
  })
})


app.post('/modules', async (request, reply) => {
  const { name, course_id } = request.body as CourseModule
  await knex("course_modules").insert({ name, course_id })
  return reply.status(201).send({
    message: "Módulo adicionado com sucesso"
  })
})


app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running")
})