// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import Login from '../components/Login'

// it('should have an email,a password field and a button', () => {
//   render(<Login />)
  
//   const usernameField = screen.getByLabelText(/username/i)
//   const passwordField = screen.getByLabelText(/password/i)
//   const submitButton = screen.getByLabelText(/submit/i)

//   expect(usernameField).toBeInTheDocument();
//   expect(passwordField).toBeInTheDocument();
//   expect(submitButton).toBeInTheDocument();
// })

// it('should allow the user to submit their credentials', () => {
//   const submit = jest.fn()
//   render(<Login />)

//   const emailField = screen.getByLabelText(/email/i)
//   const passwordField = screen.getByLabelText(/password/i)
//   const submitButton = screen.getByLabelText(/submit/i)
  
//   userEvent.type(emailField, "daf@email.com")
//   userEvent.type(passwordField, "Secure")
//   userEvent.click(submitButton)

//   expect(submit).toHaveBeenCalledWith({
//     email: "daf@email.com",
//     password: "Secure"
// })
// })