import axios from "axios";
export const getCarsApi = async () =>
  await axios.get("http://localhost:3001/cars");

export const addCarsApi = async (car) =>
  await axios.post("http://localhost:3001/cars", car);

export const editCarsApi = async (editCar) =>
  await axios.put(`http://localhost:3001/cars/${editCar.id}`, editCar);

export const deleteCarsApi = async (id) =>
  await axios.delete(`http://localhost:3001/cars/${id}`);
