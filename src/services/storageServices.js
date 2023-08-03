import models from "../models/nosql/index.js";

export default {
  createFile: async (File) => {
    let newFile = await models.storages.create(File);

    return newFile;
  },
};
