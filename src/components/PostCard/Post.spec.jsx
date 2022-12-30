/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardProps } from "./mock";

const props = postCardProps;

describe('<PostCard />', () => {
  it('should render PostCard', () => {
    render(<PostCard {...props} />);
    
    expect(screen.getByRole('img', { name: 'title 1' }))
      .toHaveAttribute('src', 'img.png');
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  })
})