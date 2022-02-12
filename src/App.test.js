import { render, screen } from '@testing-library/react';
import App from './App';


//import renderer from 'react-test-renderer'

/*test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})*/

test('Searching for Ben Franco text to render', () => {
  render(<App />)
  const nameElement = screen.getByText(/Ben Franco/i)
  expect(nameElement).toBeInTheDocument()

});