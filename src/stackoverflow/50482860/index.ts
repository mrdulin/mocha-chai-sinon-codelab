import { knex } from "./db";

export async function getDataById({ id }) {
  return knex
    .from("data")
    .select("a AS A", "b as B")
    .where("id", id);
}
