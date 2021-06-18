import TextField from "@material-ui/core/TextField";

const InputField = (thisGrocery, handleChange, name, placeholder, thisClass = "") => (
  <TextField
    className={thisClass}
    onChange={handleChange}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name={name}
    placeholder={placeholder || name}
    value={thisGrocery[name]}
  />
);

export default InputField;