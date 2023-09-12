function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    return undefined;
  }
}

const cleanObject = (obj: any) => {
  const clone = { ...obj };
  // eslint-disable-next-line
  for (const [key, value] of Object.entries(clone)) {
    if (typeof value !== "boolean" && !value) {
      delete clone[key];
    }
  }
  return clone;
};

function trimObjValues(obj: { [key: PropertyKey]: any }) {
  const cloneObj = { ...obj };
  Object.keys(cloneObj).map(
    // eslint-disable-next-line
    (k) =>
      (cloneObj[k] =
        typeof cloneObj[k] === "string" ? cloneObj[k].trim() : cloneObj[k])
  );
  return cloneObj;
}

export { parseJSON, cleanObject, trimObjValues };
