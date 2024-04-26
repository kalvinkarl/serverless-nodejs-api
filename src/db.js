const { Client } = require("pg");
const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD
});
client.connect( err=>{
	if(err)
	{
		console.log("CONNECTION ERROR",err.stack);
	}
	else{
		console.log(`DATABASE IS CONNECTED IN ${process.env.HOST}:${process.env.PORT}`);
	}
});
module.exports = client;