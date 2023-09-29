import { Responder } from './update';
import { Clear as IClear, SetCell as ISetCell, RemoveCell as IRemoveCell, UpdateEventType } from './lib';

export class Clear extends Responder implements IClear {
    type: UpdateEventType.Clear = UpdateEventType.Clear;
}

export class SetCell extends Responder implements ISetCell {
    type: UpdateEventType.SetCell = UpdateEventType.SetCell;

    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly value: number
    ) {
        super();
    }
}

export class RemoveCell extends Responder implements IRemoveCell {
    type: UpdateEventType.RemoveCell = UpdateEventType.RemoveCell;

    constructor(
        public readonly x: number,
        public readonly y: number,
    ) {
        super();
    }

}

