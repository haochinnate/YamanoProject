import React from 'react';
import TrimLevelItem from './TrimLevelItem';

const FilterResults = (props) => {

    const { levels, loading, found } = props;
    if (loading) {
        return <h2>Loading...</h2>
    }

    if (found && levels.length === 0) {
        return <h2>Not found...</h2>
    }

    const trimlevelElements = levels.map((level) =>{
        return (
            <li key={level.id} className="list-group-item">
                {/* {level.name} */}
                <TrimLevelItem level={level}/>
            </li>
        );
    });

    return (
        <div className="container">
            <ul className="list-group my-3">
                {trimlevelElements}
            </ul>
        </div>

    )
}

export default FilterResults;


