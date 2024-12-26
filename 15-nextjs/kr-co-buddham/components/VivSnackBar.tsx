"use client";
import * as React from "react";
import { Snackbar, Button, Alert, AlertColor } from "@mui/material";
import ClientOnly from "./ClientOnly";

interface CustomSnackbarProps {
  message: string;
  severity?: AlertColor;
  buttonText?: string;
  buttonColor?: "inherit" | "primary" | "secondary" | "success" | "error";
}

export function CustomSnackbar({
  message,
  severity,
  buttonText = "Open",
  buttonColor = "primary",
}: CustomSnackbarProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <ClientOnly>
      <Button onClick={() => setOpen(true)} color={buttonColor}>
        {buttonText}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        {severity ? (
          <Alert severity={severity}>{message}</Alert>
        ) : (
          <Alert severity="info">{message}</Alert>
        )}
      </Snackbar>
    </ClientOnly>
  );
}

// 기본 Snackbar
export function BasicSnackbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <ClientOnly>
      <Button onClick={() => setOpen(true)}>Open Basic</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Basic notification"
      />
    </ClientOnly>
  );
}

// 성공 메시지 Snackbar
export function SuccessSnackbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <ClientOnly>
      <Button onClick={() => setOpen(true)} color="success">
        Open Success
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">Success message!</Alert>
      </Snackbar>
    </ClientOnly>
  );
}

// 에러 메시지 Snackbar
export function ErrorSnackbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <ClientOnly>
      <Button onClick={() => setOpen(true)} color="error">
        Open Error
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">Error occurred!</Alert>
      </Snackbar>
    </ClientOnly>
  );
}
