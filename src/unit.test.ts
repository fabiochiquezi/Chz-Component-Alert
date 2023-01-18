import { screen } from '@testing-library/react'
import { useAlert } from '.'

describe('usePortalAlert', () => {
  const { success, error, open, close } = useAlert()

  afterEach(() => {
    const Alert = document.getElementById('AlertPortal')
    const parent = Alert?.parentNode
    if (parent) parent.removeChild(Alert)
  })

  test('success', () => {
    success('success')
    const Alert = screen.getByTestId('AlertPortal')
    expect(Alert.textContent?.trim()).toBe('success')
    expect(Alert).toHaveStyle('backgroundColor: #16a34a')
  })

  test('error', () => {
    error('error')
    const Alert = screen.getByTestId('AlertPortal')
    expect(Alert.textContent?.trim()).toBe('error')
    expect(Alert).toHaveStyle('backgroundColor: #dc2626')
  })

  test('open', () => {
    open('#fff', 'yes')
    const Alert = screen.getByTestId('AlertPortal')
    expect(Alert.textContent?.trim()).toBe('yes')
    expect(Alert).toHaveStyle('backgroundColor: #fff')
  })

  test('close', async () => {
    open('success', 'yes')
    const Alert = screen.getByTestId('AlertPortal')
    expect(Alert).toBeInTheDocument()
    close()
    await new Promise((resolve) => setTimeout(resolve, 300))
    expect(Alert).not.toBeInTheDocument()
  })

  test('shoudnt add two times', () => {
    success('success')
    success('success')
    const Alert = screen.getAllByTestId('AlertPortal')
    expect(Alert).toHaveLength(1)
  })
})
