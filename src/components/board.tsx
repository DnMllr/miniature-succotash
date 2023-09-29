import { Component } from 'solid-js';
import { Cell as ICell } from '../lib/lib';
import { Stateful } from '../lib/state';
import { Cell } from './cell';
import { board, row, rowGroup, group } from './board.css';

export const Board: Component<Stateful> = (props) => {
    return (
        <div class={board}>
            <div class={rowGroup}>
                <Row {...props} y={0}/>
                <Row {...props} y={1}/>
                <Row {...props} y={2}/>
            </div>
            <div class={rowGroup}>
                <Row {...props} y={3}/>
                <Row {...props} y={4}/>
                <Row {...props} y={5}/>
            </div>
            <div class={rowGroup}>
                <Row {...props} y={6}/>
                <Row {...props} y={7}/>
                <Row {...props} y={8}/>
            </div>
        </div>
    );
};

const Row: Component<Stateful & { y: number }> = (props) => {
    return (
        <div class={row}>
            <Group {...props} x={0} />
            <Group {...props} x={3} />
            <Group {...props} x={6} />
        </div>
    );
};

const Group: Component<Stateful & ICell> = (props) => {
    return (
        <div class={group}>
            <Cell {...props}/>
            <Cell update={props.update} state={props.state} x={props.x + 1} y={props.y}/>
            <Cell update={props.update} state={props.state} x={props.x + 2} y={props.y}/>
        </div>
    );
}
