import "./App.css";

//assets
import mainLogo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div
        className="mainCompoent"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={mainLogo}
          alt="Southern Curry House logo"
          width="200"
          height="200"
        />
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Southern Curry House
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Website Under Construction
        </p>
        <p style={{ fontSize: "1.5rem" }}>Please visit us soon!</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Address: 416 2 St W Revelstoke BC V0E 2S0
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Phone: +12506832178
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Email: southerncurryhouse.ca@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
