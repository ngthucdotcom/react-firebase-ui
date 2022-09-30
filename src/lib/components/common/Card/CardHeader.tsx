import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = (props: {children: any}) => {
    const { children } = props;
    return (
        <div className="firebaseui-card-header">
            <h1 className="firebaseui-title">{children}</h1>
        </div>
    );
}

CardHeader.propTypes = {
    children: PropTypes.any.isRequired,
};

CardHeader.defaultProps = {
    children: 'Card Header',
}

export default CardHeader;