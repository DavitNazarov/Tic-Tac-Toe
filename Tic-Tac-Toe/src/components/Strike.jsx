import PropTypes from "prop-types";


function Strike({ strikeClass}) {
    return ( 
        <div className={`strike ${strikeClass}`}></div>
     );
}

export default Strike;


Strike.propTypes = {
    strikeClass: PropTypes.string.isRequired,
}
