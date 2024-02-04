import { model, Schema } from "mongoose";

const dataSchema = new Schema({
  name: {
    required: true,
    type: "String",
  },
  age: {
    required: true,
    type: "Number",
  },
});

const Model = model("Data", dataSchema);
export default Model;
