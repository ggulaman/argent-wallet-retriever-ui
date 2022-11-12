import axios from "axios";
import { getEthAddressDetails } from "../api";

/* Mock jest and set the type */
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("api.js", () => {
  it("must return succ. response", async () => {
    /* Forcing Axios to Provide the following succ response */
    const expected_succ_response = {
      data: {
        ERC20Balances: [
          {
            value: "0.017245422936050022",
            token: {
              decimals: 18,
              name: "Wrapped Ether",
              symbol: "WETH",
              contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              logo: "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
              thumbnail:
                "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_thumb.png",
              chain: "0x1",
            },
          },
        ],
        address: "0x",
        ethBalance: "33",
        numberOfGuardians: "3",
      },
    };
    mockedAxios.get.mockResolvedValue(expected_succ_response);

    const response = await getEthAddressDetails("0x");
    expect(response).toBe(expected_succ_response);
  });

  it("updates the input, send the request, which fails", async () => {
    /* Forcing Axios to Reject the request */
    const err = new Error("Wrong inputs passed in");
    mockedAxios.get.mockRejectedValueOnce(err);

    mockedAxios.get.mockResolvedValue(err);

    const response = await getEthAddressDetails("0x");
    expect(response).toBe(err);
  });
});
