import Fastify from 'fastify';
const fastify = Fastify({
    logger: true
});
fastify.get('/', async function handler(request, reply) {
    reply.send({
        msg: "Hello from Fastify!"
    });
});
fastify.listen({
    port: 4000
}, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
//# sourceMappingURL=server.js.map