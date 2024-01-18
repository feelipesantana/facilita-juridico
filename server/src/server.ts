import Fastify, { FastifyReply, FastifyRequest } from "fastify";

const app = Fastify();

app.get('/', (request: FastifyRequest, reply: FastifyReply) =>{
    reply.send("HELLO")
})

app.listen({
    port:3333,
    host:'0.0.0.0'
}).then(() =>{
    console.log("Server is running on :3333")
})