import Layout from '../src/layout/Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Error extends React.Component {
  render() {
    return (
      <Layout>
        <Grid container spacing={40}>
          <Grid item>
            <Typography component="h1" variant="h4" gutterBottom>
              Je nám líto, ale tato stránka neexistuje!
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
