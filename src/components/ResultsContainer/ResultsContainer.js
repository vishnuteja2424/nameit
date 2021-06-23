import { defaults } from 'browserslist';
import React from 'react';
import NameCards from '../NameCards/NameCards';
import './ResultsContainer.css'

const ResultContainer = ({suggestedNames}) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCards key={suggestedName} suggestedName={suggestedName} />;
    });

    return (
        <div className="results-container">{suggestedNameJsx}</div>
    );
};

export default ResultContainer;

