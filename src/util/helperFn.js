export function date() {
  const newDate = new Date();

  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const date = `${day}-${month}-${year}`;
  return date;
}

export function filteredData(appState, selected, query) {
  let filteredProducts = appState;

  const filteredItems = appState?.filter(({ title }) =>
    title.toLowerCase().includes(query?.toLowerCase())
  );
  if (query) {
    filteredProducts = filteredItems;
  }

  if (selected) {
    filteredProducts = filteredProducts.filter(({ type }) => type === selected);
  }
  return filteredProducts;
}

export const transFormData = (data) => {
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      casheir: data[key].items.casheir,
      date: data[key].items.date,
      item: data[key].items.item,
      purchase: data[key].items.purchase,
      status: data[key].items.status,
    });
  }
  return loadedData;
};
