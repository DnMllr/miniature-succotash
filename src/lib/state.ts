import { Accessor, createSignal } from 'solid-js';
import { updateSchema } from './update';
import { UserAction, Solver } from './lib';
import { z } from 'zod';

const stateSchema = z.discriminatedUnion("state", [
    z.object({ state: z.literal("empty") }),
    z.object({ state: z.literal("update"), action: z.object({}), update: updateSchema }),
    z.object({ state: z.literal("error"), action: z.object({}), err: z.any() }),
]);

export type UpdateFn = (evt: UserAction) => void;
export type State = Accessor<z.infer<typeof stateSchema>>;

export interface Stateful {
    update: UpdateFn,
    state: State,
}

export const createState = (): [State, UpdateFn] => {
    const solver = new Solver();
    const [currentState, setSolverState] = createSignal<z.infer<typeof stateSchema>>({
        state: 'empty'
    });

    return [currentState, (evt: UserAction) => {
        try {
            setSolverState({ state: 'update', action: evt, update: updateSchema.parse(solver.update(evt)) });
        } catch (e) {
            setSolverState({ state: 'error', action: evt, err: (e as any).toString() })
        }
    }];
}