import axios from 'axios';
import { validate } from 'jsonschema';
import { todoSchema } from '../utils/schema';
import { getTodos } from '../api/todos.api';

describe('API Tests', () => {
    it('should pass JsonSchema Validation', async () => {
        const todos = await getTodos();

        const validationResult = validate(todos, todoSchema);

        expect(validationResult.valid).toBe(true);
    });

    it('should validate if all results have the attribute "status" equals "completed"', async () => {
        const todos = await getTodos();

        const allCompleted = todos.every((todo: { status: string }) => todo.status === 'completed');

        expect(allCompleted).toBe(true);
    });

    it('should validate all values of the attribute "due_on"', async () => {
        const todos = await getTodos();

        const allDueOnValid = todos.every((todo: { due_on: string }) => {
            const date = new Date(todo.due_on);
            return !isNaN(date.getTime());
        });

        expect(allDueOnValid).toBe(true);
    });
});
