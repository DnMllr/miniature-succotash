import { Component, createSignal } from "solid-js";
import { wrapper, input } from './cell.css';
import { SetCell, RemoveCell } from "../lib/event";
import { Cell as ICell } from "../lib/lib";
import { Stateful } from '../lib/state';

export const Cell: Component<ICell & Stateful> = (props) => {
    const onKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.key >= '1' && e.key <= '9') {
            setValue(e.key);
            props.update(new SetCell(props.x, props.y, parseInt(e.key)));
        } else {
            setValue('');
            props.update(new RemoveCell(props.x, props.y));
        }
    };

    const [value, setValue] = createSignal<string>('');

    return (
        <div class={wrapper}>
            <input class={input} type="text" onKeyDown={onKeyDown} value={value()}/>
        </div>
    );
};