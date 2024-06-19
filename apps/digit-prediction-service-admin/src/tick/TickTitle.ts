import { Tick as TTick } from "../api/tick/Tick";

export const TICK_TITLE_FIELD = "id";

export const TickTitle = (record: TTick): string => {
  return record.id?.toString() || String(record.id);
};
