import { httpRequest } from "./http-request";

describe("Http request tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue({}),
      } as unknown as Response)
    );
  });

  it("should execute fetch", async () => {
    const mockFetch = jest.spyOn(window, "fetch").mockReturnValue(
      Promise.resolve({
        json: jest.fn().mockResolvedValue({}),
      } as unknown as Response)
    );

    await httpRequest("url");

    expect(mockFetch).toBeCalled();
  });

  it("should execute fetch with custom args", async () => {
    const mockFetch = jest.spyOn(window, "fetch").mockReturnValue(
      Promise.resolve({
        json: jest.fn().mockResolvedValue({}),
      } as unknown as Response)
    );

    const data = {
      body: {
        some: "",
      },
      method: "PUT",
    } as const;

    await httpRequest("url", data);

    expect(mockFetch.mock.calls[0][0]).toEqual(
      "https://bp-pokemons.herokuapp.com/url"
    );
    expect(mockFetch.mock.calls[0][1]).toEqual({
      body: JSON.stringify(data.body),
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      method: data.method,
    });
  });
});
