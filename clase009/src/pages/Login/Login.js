import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { initialValues, validationSchema } from "./schemas";
import { Container, Grid, TextField, Button, Box } from "@material-ui/core";
import { useAuth } from "../../contexts/Auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { login } = useAuth();

  const [wrongPassword, setWrongPassword] = useState(false);

  const handleLogin = async ({ username, password }) => {
    // llegado a este punto -> username y password estan validados con mi schema.
    const jwt = await login({ username, password }); // jwt sea null o sea distinto de null
    if (!jwt) return setWrongPassword(true);
    setWrongPassword(false);
    history.push("/dashboard");
    // redireccionamos a una ruta protegida
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: ({ username, password }) => {
      handleLogin({ username, password });
    },
  });

  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <form onSubmit={formik.handleSubmit}>
            <Box mt={1}>
              <TextField
                type="text"
                name="username"
                label="Usuario"
                onChange={formik.handleChange}
                error={formik.errors.username}
                fullWidth
              />
              {formik?.errors?.username && (
                <span>{formik.errors.username}</span>
              )}
            </Box>

            <Box mt={1}>
              <TextField
                type="password"
                name="password"
                label="password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                fullWidth
              />
              {formik?.errors?.password && (
                <span>{formik.errors.password}</span>
              )}
            </Box>

            <Box mt={3}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Ingresar
              </Button>
            </Box>
          </form>
          {wrongPassword && <span>Usuario o contraseña incorrectos</span>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
