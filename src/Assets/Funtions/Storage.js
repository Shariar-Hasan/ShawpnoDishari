import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { referenceString } from "../Values/notice";
import { app } from "./Firebase.config";

export const storage = getStorage(app);

export const sourceChanger = (file, refFolderName) => {
  return new Promise((resolve, reject) => {
    const imageRef = referenceString(refFolderName);
    const noticeImgRef = ref(storage, imageRef);
    uploadBytes(noticeImgRef, file).then((snapshot) => {
      getDownloadURL(noticeImgRef)
        .then((url) => {
          return resolve({ src: url, reference: imageRef });
        })
        .catch((error) => {
          return reject(error.code);
        });
    });
  });
};
