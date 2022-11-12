import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Home from "../Home";
import axios, {
  AxiosError,
  AxiosResponse,
  AxiosResponseHeaders,
  AxiosRequestConfig,
} from "axios";

/* Mock Axios */
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

let home: any;
describe("Testing Home component", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    home = render(<Home />);
  });

  it("should be defined and the expected components", () => {
    expect(screen).toBeDefined();
    const buttons = home.getAllByRole("button");
    expect(buttons.length).toBe(1);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(1);
  });

  it("updates the input, send the request, and receives succ. response", async () => {
    /* Forcing Axios to Provide the following response */
    const axiosRequestConfig: AxiosRequestConfig = {};
    const axiosResponseHeader: AxiosResponseHeaders = {};
    const response: AxiosResponse = {
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
      status: 400,
      statusText: "",
      headers: axiosResponseHeader,
      config: axiosRequestConfig,
    };
    mockedAxios.get.mockResolvedValue(response);

    const button = home.getByRole("button");
    const input = home
      .getByTestId("textfield-ethAddress")
      .querySelector("input");
    fireEvent.change(input, { target: { value: "0x" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(home.getByTestId("response-data-box")).toBeInTheDocument();
      expect(home.getByText("Wrapped Ether")).toBeInTheDocument();
    });
    expect(home.getByText("Balance: 33")).toBeInTheDocument();
    expect(home.getByText("Number of Guardians: 3")).toBeInTheDocument();
  });

  it("updates the input, send the request, which fails", async () => {
    /* Forcing Axios to Reject the request */
    const data = {
      message: "testError",
    };
    const axiosRequestConfig: AxiosRequestConfig = {};
    const axiosResponseHeader: AxiosResponseHeaders = {};
    const response: AxiosResponse = {
      data,
      status: 400,
      statusText: "",
      headers: axiosResponseHeader,
      config: axiosRequestConfig,
    };
    const axiosError = {
      config: {},
      request: {},
      message: "asdf",
      response: response,
    } as AxiosError<any>;
    mockedAxios.get.mockRejectedValueOnce(axiosError);

    const button = home.getByRole("button");
    const input = home
      .getByTestId("textfield-ethAddress")
      .querySelector("input");
    fireEvent.change(input, { target: { value: "0x" } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(home.getByRole("alert")).toBeInTheDocument();
    });
  });
});
