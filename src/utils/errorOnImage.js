import not_found from "../assets/images/not_found_api.jpg";

export const errorOnImage = (e) => {
  e.target.src = not_found;
};
