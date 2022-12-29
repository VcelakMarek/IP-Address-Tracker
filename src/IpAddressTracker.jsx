import Map from "./Map";
import "./scss/IpAddressTracker-styles.scss";

const IpAddressTracker = () => {
  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>
        <div className="search-line">
          <label htmlFor="IpAddress">
            <input
              type="text"
              id="IpAddress"
              placeholder="Search for any IP address or domain"
            />
          </label>
          <button>
            <img src="./assets/icon-arrow.svg" alt="icon-arrow" />
          </button>
        </div>
        <section className="Ip-info">
          <ul>
            <li>
              <h3>IP ADDRESS</h3>
              <h2>192.212.174.101</h2>
            </li>
            <li>
              <h3>LOCATION</h3>
              <h2>Brooklyn, NY 10001</h2>
            </li>
            <li>
              <h3>TIMEZONE</h3>
              <h2>Brooklyn, NY 10001</h2>
            </li>
            <li>
              <h3>ISP</h3>
              <h2>SpaceX Starlink</h2>
            </li>
          </ul>
        </section>
      </header>

      <Map id="map" />
    </>
  );
};

export default IpAddressTracker;
