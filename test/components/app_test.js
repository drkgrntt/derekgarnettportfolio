import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/App';

// Use "describe" to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has a router', () => {
    expect(component.find('.router')).to.exist;
  });
});
