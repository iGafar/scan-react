export const handlePressOnlyNum = (event: any) => {
  if (event.key === 'Backspace') {
    return;
  }

  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
