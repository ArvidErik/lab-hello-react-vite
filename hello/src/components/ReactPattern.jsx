import reactImg from "../assets/react.svg"

function ReactPattern() {
    return(
        <div className="pattern">
            <img src={reactImg} alt="" className="pattern-img" style={{top:"2%", right: "38%"}}/>
            <img src={reactImg} alt="" className="pattern-img" style={{top:"28%", right: "18%"}}/>
            <img src={reactImg} alt="" className="pattern-img" style={{top:"50%", right: "45%"}}/>

            <img src={reactImg} alt="" className="pattern-img" style={{top:"5%", right: "10%", width:"50px"}}/>
            <img src={reactImg} alt="" className="pattern-img" style={{top:"15%", right: "15%", width:"50px"}}/>
            <img src={reactImg} alt="" className="pattern-img" style={{top:"25%", right: "5%", width:"50px"}}/>
        </div>
    )
}

export default ReactPattern;