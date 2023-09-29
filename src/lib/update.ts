import { Reporter } from "./lib";
import { z } from 'zod';

export const solutionSchema = z.number().nonnegative().lt(10).describe("a valid sudoku number where zero stands for blank").array();

export type Solution = z.infer<typeof solutionSchema>;

export const updateSchema = z.discriminatedUnion("type", [
    z.object({ type: z.literal('unique-solution'), solution: solutionSchema }),
    z.object({ type: z.literal('multiple-solutions'), count: z.number().nonnegative() }),
    z.object({ type: z.literal('no-solution') }),
    z.object({ type: z.literal('invalid-board') }),
    z.object({ type: z.literal('some-solution') }),
]);

export type Update = z.infer<typeof updateSchema>;

export class Responder implements Reporter {
    uniqueSolution(solution: Solution): Update {
        return {
            type: 'unique-solution',
            solution: solutionSchema.parse(solution),
        };
    }

    multipleSolutions(count: number): Update {
        return {
            type: 'multiple-solutions',
            count: z.number().nonnegative().parse(count),
        };
    }

    noSolution(): Update {
        return { type: 'no-solution' };
    }

    someSolution(): Update {
        return { type: 'some-solution' };
    }

    invalidBoard(): Update {
        return { type: 'invalid-board' };
    }
}