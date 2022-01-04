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

    // eslint-disable-next-line no-undef
    const snacksIds: NodeJS.Timeout[] = [];

    return {
        snacks,
        addSnack: (snack: Omit<Snack, 'id'>) => {
            const createdSnack = { ...snack, id: v4() };

            dispatch(snacksActions.addSnack(createdSnack));

            //TODO implement clearTimeout during extra removing snack
            const timeoutId = setTimeout(() => {
                dispatch(snacksActions.removeSnack(createdSnack.id));
            }, 5000);

            snacksIds.push(timeoutId);
        },
        removeSnack: (snack: Pick<Snack, 'id'>) => {
            if (snacks) {
                const index = snacks.findIndex((snackItem) => snackItem.id === snack.id);

                clearTimeout(snacksIds[ index ]);
            }

            dispatch(snacksActions.removeSnack(snack.id));
        },
    };
};
