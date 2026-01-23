import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../../pages/registerPage/register";
import { MemoryRouter } from "react-router";
import userRegister from "../../utils/user_register";
import "@testing-library/jest-dom";

jest.mock("../../utils/user_register");
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => jest.fn(),
}));

describe("Register", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form inputs and button", () => {
    render(<Register />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /registrate/i }),
    ).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty", async () => {
    render(<Register />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    fireEvent.click(screen.getByRole("button", { name: /registrate/i }));
    expect(await screen.findByText("Nombre incorrecto")).toBeInTheDocument();
    expect(await screen.findByText("Email incorrecto")).toBeInTheDocument();
    expect(
      await screen.findByText("Contraseña incorrecta"),
    ).toBeInTheDocument();
  });

  test("calls userRegister with valid data", async () => {
    render(<Register />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "pwd123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /registrate/i }));

    await waitFor(() => {
      expect(userRegister).toHaveBeenCalledWith(
        { name: "John", email: "john@example.com", password: "pwd123" },
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
      );
    });
  });
});
