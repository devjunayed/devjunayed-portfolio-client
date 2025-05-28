/* eslint-disable @typescript-eslint/no-explicit-any */
import {  z } from "zod";
export default function validate(data: any, schema: any) {
    try {
        schema.parse(data);

        return { valid: true, errors: null };
    } catch (error) {
        if (error instanceof z.ZodError) {
        return { valid: false, errors: error.errors };
        }
        return { valid: false, errors: [{ message: "An unexpected error occurred" }] };
    }
}