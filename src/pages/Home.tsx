import React, { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import SearchBar from "../components/SearchBar";
import CustomDataGrid from "../components/CustomDataGrid";
import CommonAlert from "../components/common/CommonAlert";
import { getEthAddressDetails } from "../api/api";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 250,
    valueGetter: (params: { row: { token: { name: any } } }) =>
      params.row.token.name,
  },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 250,
    valueGetter: (params: { row: { token: { symbol: any } } }) =>
      params.row.token.symbol,
  },
  {
    field: "contractAddress",
    headerName: "Contract Address",
    width: 355,
    renderCell: (params: { row: { token: { contractAddress: any } } }) => (
      <Link
        color="secondary"
        href={`${process.env.REACT_APP_ETH_CHAIN_BROWSER}${params.row.token.contractAddress}`}
      >
        {params.row.token.contractAddress}
      </Link>
    ),
  },
  { field: "value", headerName: "Amount", width: 250 },
];

const Home = () => {
  const [ethAddress, setEthAddress] = useState<string | null>();
  const [ethAddressResponse, setEthAddressResponse] = useState<string | null>();
  const [ethAddressBalance, setEthAddressBalance] = useState<number | null>();
  const [numberOfGuardians, setNumberOfGuardians] = useState<number | null>();
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [errorMessage400, setErrorMessage400] = useState<string | null>();
  const [ERC20Balance, setERC20Balance] = useState<GridRowsProp[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onClickSearchAddress = async () => {
    setLoading(true);
    const res = await getEthAddressDetails(ethAddress);
    if (res.data) {
      setEthAddressResponse(res.data.address);
      setEthAddressBalance(res.data.ethBalance);
      setNumberOfGuardians(res.data.numberOfGuardians);
      setERC20Balance(res.data.ERC20Balances);
    } else {
      setEthAddressResponse(null);
      setEthAddressBalance(null);
      setNumberOfGuardians(null);
      setERC20Balance([]);
      setErrorMessage400(null);
      setErrorMessage(res.message);
      res.response &&
        res.response.status === 400 &&
        setErrorMessage400(res.response.data.message);
    }
    setLoading(false);
  };

  const handleEthAddressChange = (event: {
    target: { value: React.SetStateAction<string | null | undefined> };
  }) => {
    setErrorMessage(null);
    setErrorMessage400(null);
    setEthAddress(event.target.value);
  };

  const walletDetails = (
    <Box data-testid={"response-data-box"}>
      <Typography variant="h5" gutterBottom sx={{ ml: 5, mt: 2 }}>
        Address:{" "}
        {
          <Link
            color="secondary"
            href={`${process.env.REACT_APP_ETH_CHAIN_BROWSER}${ethAddressResponse}`}
          >
            {ethAddressResponse}
          </Link>
        }
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ ml: 5, mt: 2 }}>
        Balance: {ethAddressBalance}
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ ml: 5, mt: 2 }}>
        Number of Guardians: {numberOfGuardians}
      </Typography>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ height: 45 }}>
        {errorMessage && (
          <CommonAlert variant="filled" severity="error">
            {errorMessage}
            {errorMessage400 && `: ${errorMessage400}`}
          </CommonAlert>
        )}
      </Box>
      <Box sx={{ width: "100%", height: 10 }}>
        {loading && <LinearProgress color="primary" />}
      </Box>
      <SearchBar
        onClick={onClickSearchAddress}
        handleInputText={handleEthAddressChange}
        disableButton={!ethAddress}
      />
      {ethAddressResponse && walletDetails}
      {ERC20Balance.length !== 0 && (
        <CustomDataGrid
          rows={ERC20Balance}
          columns={columns}
          sx={{ ml: 5, mt: 2 }}
        />
      )}
    </Box>
  );
};

export default Home;
