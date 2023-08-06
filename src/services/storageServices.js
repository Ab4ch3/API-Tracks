import models from "../models/nosql/index.js";

export default {
  getAllFiles: async () => {
    let allFiles = await models.storages.find({});

    return allFiles;
  },
  getFile: async (idFile) => {
    let File = await models.storages.findById(idFile);

    return File;
  },
  createFile: async (File) => {
    let newFile = await models.storages.create(File);

    return newFile;
  },
  deleteFile: async (idFile) => {
    let file = await models.storages.findByIdAndDelete(idFile);

    return file;
  },
};
