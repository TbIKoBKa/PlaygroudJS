// Core
import { useDispatch } from 'react-redux';

// Actions
import { settingsActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

export const useSettings = () => {
    const dispatch = useDispatch();
    const { setFontSize } = settingsActions;
    const settings = useSelector((state) => state.settings);

    return {
        settings,
        setFontSize: (value: number) => {
            dispatch(setFontSize(value));
        },
    };
};
