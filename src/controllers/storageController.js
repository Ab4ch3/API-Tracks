// Importamos debug
import debug from "debug";
const logger = debug("app:module-StoragesController");
export default {
  test: async (req, res, next) => {
    console.log("LLegue aca");
    res.send({ a: 1 });
  },
};
