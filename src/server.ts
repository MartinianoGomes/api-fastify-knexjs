import fastify from "fastify";

const app = fastify()

app.get('/',() => {
  return "Hello Web II"
})

app.get('/courses',() => {
  return "Hello Curso"
})

app.post('/courses',() => {
  return "Cadastra Curso"
})

app.listen({port:3333}).then(()=>{
  console.log("HTTP server running")
})

