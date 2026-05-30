import '@testing-library/jest-dom'
import { useRouter } from "next/navigation";
import {vi} from "vitest";

vi.mock("next/navigation", ()=> ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        refresh: vi.fn()
    })
}))