import React from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Styled component for the container of the New Password page
const NewPasswordFieldContainer = styled('div')({
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
const NewPasswordFieldForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(7),
  borderRadius: 10,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

// Styled component for the title of the form
const TitleTypography = styled(Typography)(({ theme }) => ({
  color: 'var(--primary, #25282B)',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: 'normal',
  marginBottom: theme.spacing(4),
}));

// Styled component for the form message
const MessageTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: '#484848',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.15px',
  width: '355px',
}));

// Styled component for the form label
const FormLabelTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  marginTop: theme.spacing(1),
  color: 'var(--primary, #25282B)',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '14px',
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
  fontWeight: 510,
  lineHeight: 'normal',
  marginBottom: theme.spacing(3),
}));

// New Password component
const NewPasswordField = () => {
  return (
    <NewPasswordFieldContainer>
      {/* Grid container for alignment */}
      <Grid spacing={2} direction="column">
        {/* Name heading */}
        <Grid item>
          <NameTypography variant="h4">Kadom</NameTypography>
        </Grid>
        {/* Main form container */}
        <Grid item>
          <NewPasswordFieldForm>
            {/* Grid container for form elements */}
            <Grid spacing={2} direction="column">
              {/* Title */}
              <Grid item>
                <TitleTypography variant="h6" color="primary">
                  New Password
                </TitleTypography>
              </Grid>
              {/* Message */}
              <Grid item>
                <MessageTypography variant="h6" color="primary">
                  Set the new password for your account so you can login and access all features.
                </MessageTypography>
              </Grid>
              {/* Enter new password */}
              <Grid item>
                <FormLabelTypography>Enter new password</FormLabelTypography>
                <FormField label="**" fullWidth />
              </Grid>
              {/* Confirm password */}
              <Grid item>
                <FormLabelTypography>Confirm password</FormLabelTypography>
                <FormField type="password" label="**" fullWidth />
              </Grid>
              {/* Update Password button */}
              <Grid item>
                <Link to="/Verification"  style={{ textDecoration: 'none' }}>
                <RoundedButton variant="contained" color="primary" fullWidth>
                  UPDATE PASSWORD
                </RoundedButton>
              </Link>
            </Grid>
        </Grid>
      </NewPasswordFieldForm>
    </Grid>
      </Grid >
    </NewPasswordFieldContainer >
  );
};

export default NewPasswordField;
