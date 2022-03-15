import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoadingScreen from './LoadingScreen'
  
  describe('LoadingScreen', () => {
    it('' , () => {
      render(<LoadingScreen />)
    })
  })
  