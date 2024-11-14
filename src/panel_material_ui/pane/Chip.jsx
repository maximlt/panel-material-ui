import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';

export function render({ model }) {
  const [color] = model.useState("color");
  const [icon] = model.useState("icon");
  const [label] = model.useState("object");
  const [size] = model.useState("size");
  const [variant] = model.useState("variant");

  return (
    <Chip
      color={color}
      icon={ icon && <Icon>{icon}</Icon> }
      label={label}
      size={size}
      variant={variant}
      onClick={(e) => model.send_event('click', e) }
    />
  );
}
