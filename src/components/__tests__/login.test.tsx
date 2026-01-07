import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../login";
import { MemoryRouter } from "react-router";
import { formSubmission } from "../../utils/form_submission";
import "@testing-library/jest-dom";

jest.mock("react-redux", () => ({ useDispatch: () => jest.fn() }));
jest.mock("../../utils/form_submission");
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => jest.fn(),
}));

describe("Login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders inputs and submit button", () => {
    render(<Login />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/Regístrate/i)).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    render(<Login />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(await screen.findByText("Email incorrecto")).toBeInTheDocument();
    expect(
      await screen.findByText("Contraseña incorrecta")
    ).toBeInTheDocument();
  });

  test("calls formSubmission with valid data", async () => {
    render(<Login />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "secret" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(formSubmission).toHaveBeenCalledWith(
        { email: "test@example.com", password: "secret" },
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function)
      );
    });
  });
});
