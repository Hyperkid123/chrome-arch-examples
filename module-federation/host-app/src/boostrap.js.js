import React, { lazy, Suspense, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import ButtonA from './modules/module-a';
const ButtonB = lazy(() => import('moduleSharingDemo/ButtonB'))
const ButtonC = lazy(() => import('moduleSharingDemo/ButtonC'))

const App = () => {
  const [show, setShow] = useState(false)
  const [showC, setShowC] = useState(false)

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <ButtonA title="Load ButtonB from remotre module" onClick={() => setShow(true)} />
          </Paper>
        </Grid>

        {show && (
          <Suspense fallback={<h1>Something is loading</h1>}>
            <Grid item xs={12}>
              <Paper>
                <ButtonB onClick={() => setShowC(true)} title="Load ButtonC from remote module" />
              </Paper>
            </Grid>
          </Suspense>
        )}  
        {showC && (
          <Suspense fallback={<h1>Something is loading</h1>}>
            <Grid item xs={12}>
              <Paper>
                <ButtonC />
              </Paper>
            </Grid>
          </Suspense>
        )}    
      </Grid>
    </Box>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />);
