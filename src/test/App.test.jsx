import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('affiche le titre', () => {
    render(<App />)
    expect(screen.getByText('Company DevOpsXXX')).toBeInTheDocument()
  })

  it('affiche la liste des utilisateurs après chargement', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getAllByTestId('user-item').length).toBeGreaterThan(0)
    })
  })
})