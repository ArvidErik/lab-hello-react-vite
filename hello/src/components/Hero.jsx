import Button from "./Button";
import ReactPattern from "./ReactPattern";

function Hero () {
    return (
        <div id="hero">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become
                a super ninja developer
            </p>
            <Button />
            <ReactPattern />
        </div>
    )
}

export default Hero;