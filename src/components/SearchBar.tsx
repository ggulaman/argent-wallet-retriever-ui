import { FC, MouseEventHandler, ChangeEventHandler } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CommonButton from "./common/CommonButton";
import CommonTextInput from "./common/CommonTextInput";

type SearchBarType = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleInputText: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  disableButton: boolean;
};

const SearchBar: FC<SearchBarType> = ({
  onClick,
  handleInputText,
  disableButton,
}) => {
  return (
    <Box>
      <CommonTextInput
        id="ethAddress"
        label="Etherum Address"
        onChange={handleInputText}
        sx={{ ml: 5, mt: 2 }}
      />
      <CommonButton
        onClick={onClick}
        disabled={disableButton}
        color="primary"
        sx={{ ml: 1, mt: 3, mb: 1, height: 36 }}
      >
        Search
      </CommonButton>
    </Box>
  );
};

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleInputText: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
};

export default SearchBar;
