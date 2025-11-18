import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('should render the page without crashing', async () => {
    const Component = await Home();
    const { container } = render(Component);
    expect(container).toBeTruthy();
  });

  it('should display the main heading', async () => {
    const Component = await Home();
    render(Component);

    const heading = screen.getByRole('heading', { name: /Greg Foster/i });
    expect(heading).toBeTruthy();
  });

  it('should display the Lore section', async () => {
    const Component = await Home();
    render(Component);

    const loreHeading = screen.getByRole('heading', { name: /Lore/i });
    expect(loreHeading).toBeTruthy();
  });

  it('should render blog post links', async () => {
    const Component = await Home();
    const { container } = render(Component);

    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });
});
