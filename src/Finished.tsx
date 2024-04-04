import React from 'react';

interface Props {
    name: string|null;
    handleRestart (): void
}

function Finished(props: Props) {

    const{name, handleRestart} = props;
    return (
        <div>
            <h1>Winner: {name} won the game!</h1>
            <button onClick={handleRestart}>Starta om</button>
        </div>
    )
}
export default Finished;