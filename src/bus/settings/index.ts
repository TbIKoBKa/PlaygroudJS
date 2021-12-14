// Core
import { useDispatch } from 'react-redux';

// Actions
import { settingsActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

export const useSettings = () => {
    const dispatch = useDispatch();
    const { setFontSize, setTabSize } = settingsActions;
    const settings = useSelector((state) => state.settings);

    return {
        settings,
        setFontSize: (value: number) => {
            dispatch(setFontSize(value));
        },
        setTabSize: (value: number) => {
            dispatch(setTabSize(value));
        },
    };
};
