import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded!");
  }

  return data;
}

export async function deleteCabin(cabinId, image) {
  const imageRelativePath = image.replaceAll(
    supabaseUrl + "/storage/v1/object/public/cabin-images/",
    ""
  );
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", cabinId);

  if (!error) {
    console.log(data);
    const { error: imageDeletionError } = await supabase.storage
      .from("cabin-images")
      .remove([imageRelativePath]);
    console.log(imageRelativePath);
    if (imageDeletionError) {
      console.log("Couldnt delete the image associate to the cabin!");
    }
  }

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted!");
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.abs(Math.round(Math.random() * 1000))}-${
    newCabin.image.name
  }`.replaceAll("/", "");
  const imagePath =
    supabaseUrl + "/storage/v1/object/public/cabin-images/" + imageName;

  //1. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    /*The newCabin has precisely the shape of the json that the api takes in */
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  console.log();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created!");
  }

  //2. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  ///3. If image didnt upload correctly then DELETE the cabin
  if (storageError) {
    const { error: deleteError } = await supabase
      .from("cabins")
      .delete()
      .eq("id", data[0].id);
    if (deleteError) {
      throw new Error("Just created cabin couldnt be deleted!");
    }

    console.error(storageError);
    throw new Error("Cabin Image could not be uploaded!");
  }
  return data;
}
