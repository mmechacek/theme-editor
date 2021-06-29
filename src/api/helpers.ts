export const http = {
  get: async <T>(url: string, init?: RequestInit) => {
    const response = await fetch(url, {
      ...init,
      ...{ credentials: "include" },
    });
    const data = await response.json();
    if (response.status === 400) {
      throw new Error(data.message);
    }
    if (!response.ok) {
      throw new Error(response.status + ": " + response.statusText);
    }
    return data as T;
  },
  post: async <T>(url: string, body?: any, init?: RequestInit) => {
    const response = await fetch(url, {
      ...{
        credentials: "include",
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      },
      ...init,
    });
    if (response.status === 400) {
      const data = await response.json();
      throw new Error(data.message);
    }
    if (!response.ok) {
      throw new Error(response.status + ": " + response.statusText);
    }
    if (response.status === 204) {
      return (Promise.resolve() as any) as T;
    } else {
      return (await response.json()) as T;
    }
  },
};

export async function fetchJson<T>(
  url: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(url, { ...init, ...{ credentials: "include" } });
  const data = await response.json();
  if (response.status === 400) {
    throw new Error(data.message);
  }
  if (!response.ok) {
    throw new Error(response.status + ": " + response.statusText);
  }
  return data;
}

export async function post(url: string, init?: RequestInit): Promise<void> {
  const response = await fetch(url, {
    ...{ credentials: "include", method: "POST" },
    ...init,
  });
  if (response.status === 400) {
    const data = await response.json();
    throw new Error(data.message);
  }
  if (!response.ok) {
    throw new Error(response.status + ": " + response.statusText);
  }
  return Promise.resolve();
}

// tslint:disable-next-line:no-any
export function toParams(obj: any) {
  let str = "";
  // tslint:disable-next-line:forin
  for (const key in obj) {
    const value = obj[key];
    if (value === undefined) {
      continue;
    }
    if (!key) {
      return;
    }
    if (str !== "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(value);
  }
  return str;
}
