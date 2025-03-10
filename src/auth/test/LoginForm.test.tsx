import { describe, it, expect } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm";

describe("<LoginForm />", () => {
  it("Debería mostrar errores de validación si los campos están vacíos", async () => {
    render(<LoginForm />);
    const submitButton = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(submitButton);
    });
    expect(screen.getByText(/El correo es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/La contraseña es requerida/i)).toBeInTheDocument();
  });
});
