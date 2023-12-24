import { Component } from "react";
import "./App.css";
import victorImg from "./Assets/victor-image.webp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Victor James Osimhen",
        bio: "Victor James Osimhen MFR is a Nigerian professional footballer who plays as a striker for Serie A club Napoli and the Nigeria national team. Considered one of the best strikers in the world, he is known for his elite finishing, pace, strength and athleticism",
        imgSrc: victorImg,
        profession: "Professional footballer",
      },
      show: false,
      mountTime: 0,
    };
  }

  componentDidMount() {
    // This stores the current after the App component mounts
    this.setState({ ...this.state, mountTime: Date() });
  }

  render() {
    const { show, mountTime, Person } = this.state;
    const { imgSrc, fullName, bio, profession } = Person;
    return (
      <div className="m-5 mt-3">
        {/* This conditionally render the Person Profile based on the boolean state of show property */}
        {show && (
          <>
            <div class="card mb-3" style={{ width: "18rem" }}>
              <img src={imgSrc} class="card-img-top" alt={fullName} />
              <div class="card-body">
                <h5 class="card-title">{fullName}</h5>
                <p class="card-text">{bio}</p>
                <p class="card-text fw-medium">{profession}</p>
              </div>
            </div>
            <p className="fw-semibold mb-3">
              This App component was mounted since:{" "}
              <span className="fw-normal">{mountTime}</span>
            </p>
          </>
        )}
        {/* This button toogles the state of show property */}
        <button
          onClick={() => {
            this.setState({ ...this.state, show: !show });
          }}
          class="btn btn-primary"
        >
          Show
        </button>
      </div>
    );
  }
}

export default App;
