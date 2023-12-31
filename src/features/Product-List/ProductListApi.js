// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-code server
    const response = await fetch("https://solo-project-data.onrender.com/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // Filter={"category":["smartphone",laptops]}
  // sort={_sort:"Price",_order="desc"}
  // Todo:on server we will support multi values
  //Pagination=_page=1&_limit=10
  //TODO:-Server will filter deleted products in case
  let queryString = "";

  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    //TODO:we will not hard-code server
    const response = await fetch(
      "https://solo-project-data.onrender.com/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

// selectedProduct

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-code server
    const response = await fetch("https://solo-project-data.onrender.com/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

//

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/products/",{
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  })
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/products/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}


//

export async function fetchCategories() {
  const response = await fetch("https://solo-project-data.onrender.com/categories");
  const data = await response.json();
  return { data };
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/brands");
    const data = await response.json();
    resolve({ data });
  });
}
