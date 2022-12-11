import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ResultDetails } from "../../../types/types";
import { SetStateAction, Dispatch } from "react";
import { TextareaAutosize } from "@mui/material";

type Prop = {
  patientFunc: Dispatch<SetStateAction<ResultDetails | null>>;
};

export default function AddressForm({ patientFunc }: Prop) {
  const [staffFirstName, setStaffFirstName] = React.useState("");
  const [staffLastName, setStaffLastName] = React.useState("");
  const [staffRemarks, setStaffRemarks] = React.useState("");



  React.useEffect(() => {
    patientFunc({
      staffFirstName,
      staffLastName,
      staffRemarks,

    });
  }, [
    staffFirstName,
    staffLastName,
    staffRemarks,
    patientFunc
  ]);
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="h6" gutterBottom>
          Result Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Staff First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={staffFirstName}
              onChange={(e) => setStaffFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Staff Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={staffLastName}
              onChange={(e) => setStaffLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Remarks</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={10}
              placeholder="Minimum 3 rows"
              style={{ width: 500 }}
              value={staffRemarks}
              onChange={(e) => setStaffRemarks(e.target.value)}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
