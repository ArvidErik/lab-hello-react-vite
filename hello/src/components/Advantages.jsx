import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"


function Advantages () {
    return (
        <div className="section">
            <div className="adv-card">
                <img src={icon1} alt="" />
                <h4>Declarative</h4>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className="adv-card">
                <img src={icon2} alt="" />
                <h4>Components</h4>
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div className="adv-card">
                <img src={icon3} alt="" />
                <h4>Single-way</h4>
                <p>A set of immutable values are passed to the component's</p>
            </div>
            <div className="adv-card">
                <img src={icon4} alt="" />
                <h4>JSX</h4>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>

    )
}

export default Advantages;