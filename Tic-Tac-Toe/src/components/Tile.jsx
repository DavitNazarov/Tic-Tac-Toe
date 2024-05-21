import PropTypes from "prop-types";

function Tile({className ,value ,onClick ,playerTurn}) {
    let hoverClass =null;
    if (value == null && playerTurn !== null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
    return ( 
        <div onClick={onClick} className={`tile ${className} ${hoverClass} `}>{value}</div>
     );
}

export default Tile;
Tile.propTypes = {
    className: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    onClick: PropTypes.any.isRequired,
    playerTurn: PropTypes.any.isRequired,
}
