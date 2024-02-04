import Model from "../model/model.js";

// POST
export const addData = async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  }); // POST data using the model
  try {
    // Saving the data using data.save() and also sending the success message with the data in the response body.
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const allData = async (req, res) => {
  try {
    const data = await Model.find(); // Model.find() method to fetch all data from the databse.
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDataById = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id); // Model.findById(req.params.id) find data from id which is pass through params.
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updateData, options); // Model.findByIdAndUpdate() accept 3 arguments: 1 - param id, 2 - request body or update data, 3 - options which specifies to return the updated data in the body or not.

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id); // Model.findByIdAndDelete() use to delete that field, while passing id.
    res.send(`${data.name} Remove Successfully`);
  } catch (error) {
    res.json({ message: error.message });
  }
};
