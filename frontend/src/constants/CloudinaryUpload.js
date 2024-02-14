import axios from "axios";

export const postDetails = async (pics) => {
     if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "nyka-dashboard");
          data.append("cloud_name", "u-code");

          const res = await axios.post(
               "https://api.cloudinary.com/v1_1/u-code/image/upload",
               data
          );
          return res?.data?.url;
     }
};