// Core
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
import { snacksActions } from './slice';

// Types
import { Snack } from './types';

export const useSnacks = () => {
    const dispatch = useDispatch();
    const snacks = useSelector((state) => state.snacks);

    return {
        snacks,
        addSnack: (snack: Omit<Snack, 'id'>) => {
            const createdSnack = { ...snack, id: v4() };

            dispatch(snacksActions.addSnack(createdSnack));

            setTimeout(() => {
                if (snacks?.find((snack) => snack.id === createdSnack.id)) {
                    dispatch(snacksActions.removeSnack(createdSnack.id));
                }
            }, 5000);
        },
        removeSnack: (snack: Pick<Snack, 'id'>) => dispatch(snacksActions.removeSnack(snack.id)),
    };
};
