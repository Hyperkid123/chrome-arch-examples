import React from 'react'
import Button from '@mui/material/Button';

function ModuleB({ title, onClick }) {
  return <Button onClick={onClick} variant="contained">{title}</Button>;
}

export default ModuleB;
