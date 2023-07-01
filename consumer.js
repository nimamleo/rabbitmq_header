const amqp = require("amqplib");

const exhangeName = "exhangeName";

async function getMsg() {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    channel.assertExchange(exhangeName, "topic");
    const assertedQueue = await channel.assertQueue("", { exclusive: true });
    channel.bindQueue(assertedQueue.queue, exhangeName, "", {
        name: "nima",
        age: 20,
        "x-match": "all",
    });
    // channel.bindQueue(assertedQueue.queue, exhangeName, "" ,{name:"nima", age:20 , "x-match":"any"});
    channel.consume(assertedQueue.queue, (msg) => {
        console.log(msg.content.toString());
        channel.ack(msg);
    });
}

getMsg();
