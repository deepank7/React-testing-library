import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}
describe("FollowersList", () => {
    it('should render the first follower card', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    it('should render all fivee follower cards', async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    });
})