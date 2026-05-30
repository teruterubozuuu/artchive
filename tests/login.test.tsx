import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../components/auth/LoginForm';
import {test, expect, describe, it} from "vitest"

describe("LoginForm", () => {
    it("renders email and password fields", () => {
        render(<LoginForm/>);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    })
})