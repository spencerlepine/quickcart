import TextField from "@material-ui/core/TextField";
import toTitleCase from "../../modules/toTitleCase";

const InputField = (thisGrocery, handleChange, name, placeholder, thisClass = "", type = "string") => (
  <TextField
    className={thisClass}
    onChange={handleChange}
    variant="outlined"
    margin="normal"
    required
    type={type}
    fullWidth
    name={name}
    placeholder={toTitleCase(placeholder || name)}
    value={thisGrocery[name]}
  />
);

export default InputField;