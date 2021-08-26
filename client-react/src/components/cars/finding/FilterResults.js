import React from 'react'

const FilterResults = (props) => {

    const { levels, loading } = props;
    if (loading) {
        return <h2>Loading...</h2>
    }

    const trimlevelElements = levels.map((level) =>{
        return (
            <li key={level.id} className="list-group-item">
                {level.name}
            </li>
        );
    });

    return (
        <ul className="list-group mb-4">
            {trimlevelElements}
        </ul>
    )
}

export default FilterResults;


