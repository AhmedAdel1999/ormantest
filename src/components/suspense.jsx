import { TwinSpin } from "react-cssfx-loading";
const SuspenseComponent = () =>{
    const divStyle={
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        fontSize:" 18px",
        fontWeight: "bold",
        color: "#08130c",
        background: "#23733f"
    }

    return(
        <div style={{...divStyle}}>
            <TwinSpin color="#08130c" width="150px" height="150px" duration="1.5s" />
            <p>...Landing</p>
        </div>
    )
}
export default SuspenseComponent;