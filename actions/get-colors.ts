import { Color } from "../type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { cache: "no-cache" });

  return await res.json();
};
