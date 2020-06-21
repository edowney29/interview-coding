import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import CreateStore from './stores/'
import App from './App'

const store = CreateStore()

test('ensure header is rendered', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText(/RP Funding App/i)).toBeInTheDocument()
})
