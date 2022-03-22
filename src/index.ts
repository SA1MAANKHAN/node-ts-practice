import {
  writeFileSync,
  readFileSync,
  open,
  createReadStream,
  ReadStream,
  appendFileSync,
} from "fs";
import path from "path";
import express from "express";
import { getWeatherInfo } from "./weather";
import hbs from "hbs";
import { EventEmitter } from "events";

// 1 =======================

// import yargs, { ArgumentsCamelCase } from "yargs";

// yargs.command({
//   command: "add",
//   describe: "does what you think it does",
//   builder: {
//     numArray: {
//       describe: "gets the number array",
//     },
//   },
//   handler: (argv: ArgumentsCamelCase<unknown>): void => {
//     const nums: Array<number> = JSON.parse(argv.numArray as string);
//     const result: number = nums[0] + nums[1];
//     console.log(result);
//   },
// });

// yargs.parse();

// 2 ==========

// const person = { name: "salmaaan", age: 21 };

// writeFileSync("data.json", JSON.stringify(person));

// const dataBuffer: Buffer = readFileSync("data.json");

// console.log(JSON.parse(dataBuffer.toString()));

// 3 ==========================

// function add(a: number, b: number, cb: (sum: number) => void): void {
//   const sum: number = a + b;

//   console.log("wait for 2 seconds");

//   setTimeout(cb, 2000, sum);
// }

// add(1, 2, (item) => {
//   console.log(item);
// });

// 4 ===========================

// import axios from "axios";

// async function getWeatherInfo(city: string): Promise<void> {
//   const data = await axios.get(
//     `http://api.weatherapi.com/v1/current.json?key=94d1cfec0e1b48d0afb122227220903&q=${city}&aqi=no`
//   );

//   console.log(data.data.current);
// }

// getWeatherInfo("Delhi");

// 5 ==========================

// creating paths
// const pathToPulic: string = path.join(__dirname, "../public");
// const pathToTemplates: string = path.join(__dirname, "../templates/views");
// const pathToPartials: string = path.join(__dirname, "../templates/partials");

// const app = express();
// app.use(express.json());
// app.use(express.static(pathToPulic));

// // handlebars settings
// app.set("view engine", "hbs");
// app.set("views", pathToTemplates);
// hbs.registerPartials(pathToPartials);

// app.get("", (req, res) => {
//   res.render("index", { message: "Yo! Spidey" });
// });

// app.get("/about", (req, res) => {
//   res.render("about", {
//     heading: "Need Some Help?",
//     content: "Don't keep asking for help, become self dependent",
//   });
// });
// app.get("/weather", async (req: any, res: any) => {
//   const location: string = req.query.loc;
//   const data = await getWeatherInfo(location);
//   res.send(data);
// });

// app.listen(5000, () => {
//   console.log("now listening to 5000");
// });

// 5 ==========================

// const readStream: ReadStream = createReadStream(
//   "/home/test/Documents/Salmaan/coding-tricks/node-ts/src/data.txt"
// );

// readStream.on("data", (chunk) => {
//   console.log("---------------------------------");
//   console.log(chunk);
//   console.log("---------------------------------");
// });

// readStream.on("open", () => {
//   console.log("Stream opened...");
// });

// readStream.on("end", () => {
//   console.log("Stream Closed...");
// });

// 6 ==========================

// const readStream: ReadStream = createReadStream(
//   "/home/test/Documents/Salmaan/coding-tricks/node-ts/src/data.txt"
// );

// setTimeout(() => {
//   const data = readStream.read(10);
//   console.log(data);
// }, 10);

// const data = readStream.read(10);
// readStream.read(10);
// readStream.read(10);
// readStream.read(10);
// readStream.read(10);

// const data2 = readStream.read(10);
// console.log(data, data2);

// 7 ==========================

// const app = express();

// const eventEmitter = new EventEmitter();

// // app.set("eventEmitter", eventEmitter);

// // access it from any module of the application
// app.get("eventEmitter");

// console.log(
//   app.get("eventEmitter").on("someEvent", () => {
//     console.log("yo1");
//   })
// );
// console.log(
//   app.get("eventEmitter").on("anotherEvent", () => {
//     console.log("yo2");
//   })
// );

// app.get("eventEmitter").emit("someEvent");

// eventEmitter.on("getReqAyi?", (e) => {
//   console.log("agyi agyi agyi");
//   e();
// });

// app.get("/", (req, res) => {
//   eventEmitter.emit("getReqAyi?");
//   res.send("emitted");
// });

// eventEmitter.emit("getReqAyi?", () => {
//   console.log("job done");
// });

// app.listen(3000, () => {
//   console.log("listenin...");
// });

// 8 ==========================

// let x: number = 0;

// const next = () => {
//   console.log(x++);
//   process.nextTick(next);
// };

// next();

// 9 ==========================

// let chunkIndex = 0;
// const readStream = createReadStream(
//   "/home/test/Documents/Salmaan/coding-tricks/node-ts/src/data.txt"
// );

// readStream.on("open", () => {
//   console.log("Started Reading...");
// });

// readStream.on("end", () => {
//   console.log("Completed Reading...");
// });

// readStream.on("data", (chunk) => {
//   console.log("Chunk: " + ++chunkIndex);
//   console.log("-----------------------------------------");
//   console.log(chunk);
//   console.log("\n");
// });

// 10 ==========================

// open(
//   "/home/test/Documents/Salmaan/coding-tricks/node-ts/src/data.txt",
//   "w+",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     writeFileSync(data, JSON.stringify({ name: "mama" }));
//     appendFileSync(data, "dadada");

//     const file = readFileSync(data);

//     console.log(file);
//   }
// );

// 11 ==========================

// const myEmitter = new EventEmitter();
// // Only do this once so we don't loop forever

// myEmitter.on("event", () => {
//   console.log("A");
// });

// myEmitter.emit("event");
// Prints:
//   B
//   A

// 12 ==========================

const firstBuf = Buffer.alloc(10, "a1", "ascii");
console.log(firstBuf);

console.log(firstBuf.toString());

const hiBuf = Buffer.from("Hi!");
console.log(hiBuf);

// 13 ==========================

// 14 ==========================

// 15 ==========================

// 16 ==========================

// 17 ==========================

// 18 ==========================

// 5 ==========================
// 5 ==========================
// 5 ==========================
// 5 ==========================
// 5 ==========================
// 5 ==========================
// 5 ==========================
// 5 ==========================
// 5 ==========================
