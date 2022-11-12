import axios from "axios";

export async function getEthAddressDetails(
  ethAddress: string | null | undefined,
) {
  const response = await axios
    .get(`${process.env.REACT_APP_API_URL}/${ethAddress}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return response;
}
