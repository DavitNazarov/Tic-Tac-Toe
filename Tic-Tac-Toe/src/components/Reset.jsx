import GameState from "./GameState";
import PropTypes from "prop-types";

function Reset({gameState ,onReset}) {
    if (gameState === GameState.inProgress) {
        return;
    }
    return ( <button onClick={onReset} className="reset-button">Reset</button> );
}

export default Reset;


Reset.propTypes = {
    gameState: PropTypes.any.isRequired,
    onReset: PropTypes.any.isRequired,
}
