import { FormControl, FormLabel, Switch, useColorMode } from '@chakra-ui/react';

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor='toggle-color-mode' mb='0'>
        Toggle dark mode
      </FormLabel>
      <Switch id="toggle-color-mode" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </FormControl>
  );
};

export default ColorModeButton;

