const BASE_URL = "https://bp-pokemons.herokuapp.com";

export const httpRequest = <T>(
  url: string,
  data?: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    body: any;
  }
): Promise<T> => {
  const method = data?.method ?? "GET";
  const body = data?.body ? JSON.stringify(data.body) : undefined;

  return fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body,
  }).then((response) => response.json());
};
