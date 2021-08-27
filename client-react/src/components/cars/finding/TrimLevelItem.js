import React from 'react'

const TrimLevelItem = (props) => {
    const { level } = props;
    return (
        <div>
            <h5>{level.name}</h5>
            <h5>{level.price}</h5>
        </div>
    )
}

export default TrimLevelItem
