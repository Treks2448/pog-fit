import react from 'react';
import List from '../dependencies/list/List';

function MealTab(){
    return (
        <div>
            <ul>
                {/* Load entries from database */}
                <List />
            </ul>
        </div>
    );
}

export default MealTab;