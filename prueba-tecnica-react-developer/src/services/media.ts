import { type MediaData } from "../types.d"

export const getAllMedia = async (): Promise<MediaData> => {
  const res = await fetch("/data/sample.json")
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const json = await res.json()
  return json
}