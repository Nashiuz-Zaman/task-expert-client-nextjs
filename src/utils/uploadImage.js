// axios
import axios from 'axios';

export const uploadImage = (imageFile, hostingAPI) => {
   const image = { image: imageFile };
   
   return axios.post(hostingAPI, image, {
      headers: {
         'content-type': 'multipart/form-data',
      },
   });
};
