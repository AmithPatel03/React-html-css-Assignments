import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

describe('Search', () => {
  // when user enters correct username
  test('user enters correct username and user profile data is displaying on screen + if user click search again app displays form ', () => {
    const { getByPlaceholderText, getByRole, findByText } = render(<Search />)
    expect(getByPlaceholderText('Type Username')).toBeInTheDocument()
    const usernameInput = getByPlaceholderText('Type Username')
    userEvent.type(usernameInput, 'shivamp20')
    expect(usernameInput).toHaveValue('shivamp20')

    setTimeout(() => {
      const searchBtn = getByRole('button', { name: 'Search' })
      userEvent.click(searchBtn)
      expect(findByText('Shivam Pandey')).toBeIntheDocument()

      const searchAgainBtn = getByRole('button', { name: 'Search Again' })
      userEvent.click(searchAgainBtn)
      expect(getByPlaceholderText('Type Username')).toBeInTheDocument()
    }, 3000)
  })

  // when user enters incorrect username
  test('user enters invalid username and required message is displaying on screen + if user clicks search again app displays form', () => {
    const { getByPlaceholderText, getByRole, findByText } = render(<Search />)

    expect(getByPlaceholderText('Type Username')).toBeInTheDocument()

    const usernameInput = getByPlaceholderText('Type Username')
    userEvent.type(usernameInput, 'kjsddskdlkjsjskaajjdk')
    expect(usernameInput).toHaveValue('kjsddskdlkjsjskaajjdk')

    setTimeout(() => {
      const searchBtn = getByRole('button', { name: 'Search' })
      userEvent.click(searchBtn)
      expect(findByText("I can't found this user")).toBeIntheDocument()

      const searchAgainBtn = getByRole('button', { name: 'Search Again' })
      userEvent.click(searchAgainBtn)
      expect(getByPlaceholderText('Type Username')).toBeInTheDocument()
    }, 3000)
  })
})
