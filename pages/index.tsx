import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/context/ui";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function Home() {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Pendientes"></CardHeader>

            <CardContent>
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Pendientes"></CardHeader>

            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Pendientes"></CardHeader>

            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
