

export default function Home() {
    return (
        <div className="home container">
            <h1 className="title title--home">The Launchpad Protocol for Everyone!</h1>
            <p className="home__text">Tokerr Classic PAD helps everyone to create their own tokens and token sales in few seconds. Tokens created on Tokerr Classic PAD will be verified and published on explorer websites.</p>
            <div className="home__buttons">
                <button className="button button--red home__button">Create Now</button><a href="/creat_now"></a>
                <button className="button button--grey home__button">Learn More</button>
            </div>
            <ul className="home__stats">
                <li className="home__stats-item">
                    <div className="home__stats-name">Total Liquidity Raised</div>
                    <div className="home__stats-value">$0.0</div>
                </li>
                <li className="home__stats-item">
                    <div className="home__stats-name">Total Projects</div>
                    <div className="home__stats-value">1</div>
                </li>
                <li className="home__stats-item">
                    <div className="home__stats-name">Total Participants</div>
                    <div className="home__stats-value">2</div>
                </li>
                <li className="home__stats-item">
                    <div className="home__stats-name">Total Values Locked</div>
                    <div className="home__stats-value">$0M</div>
                </li>
            </ul>
        </div>
    );
}
