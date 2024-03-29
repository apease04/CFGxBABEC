import { getRecords, createRecord } from "../services.js";

async function get(req, res, next) {
  try {
    const rows = await getRecords(req.body);
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting records`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const row = await createRecord(req.body);
    res.json(row);
  } catch (err) {
    console.error(`Error while creating record`, err.message);
    next(err);
  }
}

// async function update(req, res, next) {
//   try {
//     res.json(await programmingLanguages.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }

// async function remove(req, res, next) {
//   try {
//     res.json(await programmingLanguages.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }

export { get, create };
