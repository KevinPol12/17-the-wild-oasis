import toast from "react-hot-toast";
import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded!");
  }

  return data;
}

export async function deleteCabin(id) {
  console.log(typeof id);
  console.log(id);
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted!");
  }
  console.log(data);
  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    /*The newCabin has precisely the shape of the json that the api takes in */
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created!");
  }

  console.log(data);
  return data;
}
