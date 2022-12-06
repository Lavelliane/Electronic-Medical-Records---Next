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
import { PatientDetails } from "../../../types/types";
import { SetStateAction, Dispatch } from "react";

type Prop = {
    patientFunc: Dispatch<SetStateAction<PatientDetails | null>>;
}

export default function AddressForm({patientFunc}: Prop) {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [city, setCity] = React.useState('')
  const [state, setState] = React.useState('')
  const [age, setAge] = React.useState(0)
  const [country, setCountry] = React.useState('')

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  React.useEffect(() => {
    patientFunc({
        date,
        firstName,
        lastName,
        address,
        city,
        state,
        age,
        country
    })
  }, [date, firstName, lastName, address, city, state, age, country, patientFunc])
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="h6" gutterBottom>
          Patient Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} mt={2}>
            <DesktopDatePicker
              label="Date of Appointment"
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              minDate={dayjs()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address"
              fullWidth
              autoComplete="shipping address-line1"
              value={address}
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="age"
              name="age"
              label="Age"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={age}
              onChange={(e) => setAge(+e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
