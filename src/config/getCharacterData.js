import { BASE_URL } from "./baseURL";

export const getCharacterData = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/character/${data}`);
    if (!res.ok) {
      throw new Error("ha ocurrido un error en la consulta");
    }
    const response = await res.json();

    return response;
  } catch (ex) {
    console.error(ex);
  }
};
