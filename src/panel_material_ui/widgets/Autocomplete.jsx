import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import Popper from "@mui/material/Popper"

export function render({model, el}) {
  const [value, setValue] = model.useState("value")
  const [options] = model.useState("options")
  const [label] = model.useState("label")
  const [restrict] = model.useState("restrict")
  const [variant] = model.useState("variant")
  const [disabled] = model.useState("disabled")

  function CustomPopper(props) {
    return <Popper {...props} container={el} />
  }

  const filt_func = (options, state) => {
    let input = state.inputValue
    if (input.length < model.min_characters) {
      return []
    }
    return options.filter((opt) => {
      if (!model.case_sensitive) {
	opt = opt.toLowerCase()
	input = input.toLowerCase()
      }
      return model.search_strategy == 'includes' ? opt.includes(input) : opt.startsWith(input)
    })
  }

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      options={options}
      disabled={disabled}
      freeSolo={!restrict}
      filterOptions={filt_func}
      variant={variant}
      PopperComponent={CustomPopper}
      renderInput={(params) => <TextField {...params} variant={variant} label={label} />}
    />
  )
}
