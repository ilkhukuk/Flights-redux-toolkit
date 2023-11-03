import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../helpers/contants";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);

  const newData = res.data.aircraft.map((f) => ({
    id: f[0],
    code: f[1],
    lat: f[2],
    lng: f[3],
  }));

  return newData;
});