export function buildErrorFromSupabase(code: unknown): Error {
  switch (code) {
    case "user_already_exists":
      return new Error("El correo electrónico ya se encuentra registrado");
    case "invalid_credentials":
      return new Error("El correo electrónico o la contraseña son incorrectos");
    case "42501":
      return new Error("No tienes permisos para realizar esta acción");
    default:
      console.error("Unhandled error code:", code);
      return new Error(
        "Ocurrió un error inesperado. Por favor, intenta de nuevo"
      );
  }
}
