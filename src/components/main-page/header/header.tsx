import { AppBar, Container, Grid } from "@mui/material";
import "./header.css";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ maxHeight: "20vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div className="appName">
              <h1>Hobbynet</h1>
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
