import { supabase } from "./supabase";

export const getCabins = async function () {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("name");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  //   console.log(data);
  return data;
};
export const getCabin = async (id: string) => {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Cabin id cannot be loaded");
  }
  return data;
};
