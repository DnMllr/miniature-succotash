import { Update, Solution } from './update';

// Sudoku solver.
// 
// Feel absolutely free to add new methods and properties to this class
export class Solver {
    // This method is called when the user updates the UI
    // the purpose of this method is to read the user's action
    // and respond with the appropriate update.
    update(action: UserAction): Update {
        throw new Error("not implemented");
    }
}

export interface Reporter {
    // return when there is exactly one solution
    uniqueSolution(solution: Solution): Update;
    // return when there are multiple solutions and you know exactly how many
    multipleSolutions(count: number): Update;
    // return when there are no solutions
    noSolution(): Update;
    // return when there are multiple solutions but you don't know how many
    someSolution(): Update;
    // return when the board is invalid
    invalidBoard(): Update;
}

export enum UpdateEventType {
    Clear = 'clear',
    SetCell = 'set-cell',
    RemoveCell = 'remove-cell',
}

export interface Cell {
    x: number;
    y: number;
}

export type UserAction = Clear | SetCell | RemoveCell;

export interface Clear extends UpdateEvent<UpdateEventType.Clear> {}

export interface SetCell extends UpdateEvent<UpdateEventType.SetCell>, Cell {
    value: number;
}

export interface RemoveCell extends UpdateEvent<UpdateEventType.RemoveCell> {}

export interface UpdateEvent<T extends UpdateEventType> extends Reporter {
    type: T;
}

