const amqp = require('amqplib');

const exhangeName = "exhangeName"

async function sendMsg(){
    const connection = await amqp.connect("amqp://localhost")
    const channel = await connection.createChannel()
    channel.assertExchange(exhangeName , "header")
    channel.publish(exhangeName , '',Buffer.from('message') , {headers:{
        name:"nima",
        age:12,
        gender:"male"
    }})
    setTimeout(()=>{
        connection.close()
        process.exit(0)
    } , 1000)
}

sendMsg()