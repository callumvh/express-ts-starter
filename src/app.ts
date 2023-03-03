import "source-map-support/register";
import express, { Request, Response } from "express";
import { Message, Req, TypedRequestBody, UserInfo } from "../Types/Req";
import { ButtonOption, Res, TypedResponse } from "../Types/Res";
import bodyParser from "body-parser";
import { buildResponse } from "./StateMachineService";



const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello cal!");
});

app.post('/movestate', async (req: TypedRequestBody<Req>, res: TypedResponse<Res>) => {

  try {
    const retObject = await buildResponse(req.body);
    res.json(retObject);
  } catch (error) {
  }
})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
