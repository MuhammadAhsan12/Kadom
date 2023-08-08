import React from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Styled component for the container of the ForgetPassword page
const ForgetPasswordContainer = styled('div')({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  background: 'var(--main-color, linear-gradient(90deg, #1FBBC2 0%, #67D1AB 100%))',
});

// Styled component for the name heading
const NameTypography = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '44px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  marginBottom: theme.spacing(12),
}));

// Styled component for the main form container
const ForgetPasswordForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(7),
  borderRadius: 10,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

// Styled component for the title of the form
const TitleTypography = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: theme.spacing(2),
}));

// Styled component for the message below the title
const MessageTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: '#484848',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.15px',
  width: '350px',
}));

// Styled component for the form labels
const FormLabelTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  marginTop: theme.spacing(1),
  color: 'var(--primary, #25282B)',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 590,
  lineHeight: 'normal',
}));

// Styled component for the form input fields
const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: '362px',
  height: '49px',
  flexShrink: 0,
}));

// Styled component for the rounded button
const RoundedButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  width: '362px',
  padding: '15px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  background: 'var(--main-color, linear-gradient(90deg, #1FBBC2 0%, #67D1AB 100%))',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 510,
  lineHeight: 'normal',
}));

// Main ForgetPassword component
const ForgetPassword = () => {
  return (
    <ForgetPasswordContainer>
      {/* Grid container for alignment */}
      <Grid spacing={2} direction="column">
        {/* Name heading */}
        <Grid item>
          <NameTypography variant="h4">Kadom</NameTypography>
        </Grid>
        {/* Main form container */}
        <Grid item>
          <ForgetPasswordForm>
            {/* Grid container for form elements */}
            <Grid spacing={2} direction="column">
              {/* Title */}
              <Grid item>
                <TitleTypography variant="h6" color="primary">Forgot password</TitleTypography>
              </Grid>
              {/* Message */}
              <Grid item>
                <MessageTypography variant="h6" color="primary">
                  Enter your email for the verification process, we will send a 4-digit code to your email.
                </MessageTypography>
              </Grid>
              {/* Form input field for email */}
              <Grid item>
                <FormLabelTypography>Email Address</FormLabelTypography>
                <FormField label="Enter email" fullWidth />
              </Grid>
              {/* Button for continuing the process */}
              <Grid item>
                <Link to="/NewPasswordField"  style={{ textDecoration: 'none' }}>
                  <RoundedButton variant="contained" color="primary" fullWidth>
                    CONTINUE
                  </RoundedButton>
                </Link>
              </Grid>
            </Grid>
          </ForgetPasswordForm>
        </Grid>
      </Grid>
    </ForgetPasswordContainer>
  );
};

export default ForgetPassword;
