import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //if(items.length<=pageNumber*pageSize) pageNumber--;

  let startIndex = (pageNumber - 1) * pageSize;
  if (startIndex === items.length) startIndex = (pageNumber - 2) * pageSize;

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
