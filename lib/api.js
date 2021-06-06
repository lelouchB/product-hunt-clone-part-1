const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base("products");

export const getAllProducts = async () => {
  const data = await table
    .select({
      view: "Grid view",
    })
    .firstPage();
  return data.map((record) => {
    return { id: record.id, ...record.fields };
  });
};