import {Box, Container, Typography} from "@mui/material";

const Layout = ({ children}) => {

return (

<div>
  <Box>
      <Container>
          {children}
      </Container>
  </Box>

    <Box>
            <Typography variant="h4" component="h1" sx={{mb: 2}}>
                Derechos Reservados
            </Typography>
    </Box>

</div>

)};

export default Layout;