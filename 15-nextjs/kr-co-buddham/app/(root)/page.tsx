"use client";

import * as React from "react";
import { Stack } from "@mui/material";
import { CircularProgress } from "@/components/mui-components";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import ClientOnly from "@/components/ClientOnly";
import {
  BasicSnackbar,
  SuccessSnackbar,
  ErrorSnackbar,
  CustomSnackbar,
} from "@/components/VivSnackBar";

const Root = () => {
  return (
    <ClientOnly>
      <div className="h-screen bg-slate-200">
        <h1>Home</h1>
        <>
          <BasicSnackbar />
          <SuccessSnackbar />
          <ErrorSnackbar />
        </>
        <>
          <CustomSnackbar message="Basic notification" />
          <CustomSnackbar
            message="Success!"
            severity="success"
            buttonText="Basic"
            buttonColor="success"
          />
          <CustomSnackbar
            message="Error occurred"
            severity="error"
            buttonText="Error Occurred"
            buttonColor="error"
          />
        </>
        <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
        <DeleteIcon />
        <CloudDownloadOutlinedIcon />
      </div>
    </ClientOnly>
  );
};

export default Root;
