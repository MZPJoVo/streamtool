import ScoreboardView from './ScoreboardView';
import Settings from './Settings';

import MatchState from '@interfaces/MatchState';

interface AppViewProps {
    view: string;
    state: MatchState;
}

const AppView = ({ view, state }: AppViewProps) => {
    switch (view) {
        case 'scoreboard':
            return <ScoreboardView state={state} />;
            
        case 'settings':
            return <Settings state={state.darkmode} setStateCallback={state.setDarkmode} />;
        
        default:
            return <></>
    }
};

export default AppView;