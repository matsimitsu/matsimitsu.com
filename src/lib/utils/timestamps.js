import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export function parsedTimestamp(timestamp) {
  return timestamp ?dayjs(timestamp) : null
}
