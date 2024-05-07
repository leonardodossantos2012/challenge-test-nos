import axios, { AxiosResponse } from 'axios';

interface Todo {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: string;
}

// Define the base URL for different environments
const BASE_URL = process.env.API_URL;

export async function getTodos(): Promise<Todo[]> {
  if (!process.env.API_URL) {
    throw new Error('API_URL environment variable is not provided.');
  }

  try {
    const response: AxiosResponse<Todo[]> = await axios.get(`${BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}
