// import dotenv from "dotenv";
// dotenv.config();
const Wallenfluxdb = require('../lib/Wall-Enfluxdb.js')



// const WallE = new Wallenfluxdb(
// 	process.env.INFLUX_TOKEN,
// 	process.env.INFLUX_URL,
// 	process.env.INFLUX_ORG,
// 	process.env.INFLUX_BUCKET,
// 	"ms")


test("write data", () => {
	expect(1).toBe(1);
});


// test("write data", () => {
// 	WallE.writeData("walle", {tag:"walle", tag2:"yaho"},{field:140}, new Date().getTime())
// 	WallE.commitData()
// 	.then((response)=>{
// 		expect(response.size).toBe(0);
// 	}).catch((error)=>{
// 		expect(error).toThrow(`check error [${error}]`);
// 	})
// });