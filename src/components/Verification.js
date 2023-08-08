import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Styled component for the container of the Verification page
const VerificationContainer = styled('div')({
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
const VerificationForm = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(7),
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

// Styled component for the title of the form
const TitleTypography = styled(Typography)(({ theme }) => ({
    color: '#000',
    fontFamily: 'SF Pro, sans-serif',
    fontSize: '28px',
    fontWeight: 400,
    lineHeight: 'normal',
    marginBottom: theme.spacing(2),
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

// Styled component for the form input fields
const FormField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(1.5),
    display: 'flex',
    width: '65px',
    margin: '16px 11px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '36px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
}));

// Styled component for the code input container
const CodeInput = styled(Grid)(({ theme }) => ({
    display: 'flex',
    // gap: '1px',
}));

// Styled component for the counter text
const CounterTypography = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    fontFamily: 'SF Pro, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(3),
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

// Styled component for the "Resend" link
const ResendLink = styled(Link)(({ theme }) => ({
    color: '#828282',
    textAlign: 'center',
    fontFamily: 'SF Pro, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.25px',
}));

// Verification component
const Verification = () => {
    // State variable to track whether to apply red border style or not
    const [isRed, setIsRed] = useState(false);

    // Click event handler for the "CONTINUE" button
    const handleClick = () => {
        // Assuming there is some logic here to verify the code
        // For demonstration purposes, we will just apply red border on click
        setIsRed(true);
    };

    return (
        <VerificationContainer>
            {/* Grid container for alignment */}
            <Grid spacing={2} direction="column">
                {/* Name heading */}
                <Grid item>
                    <NameTypography variant="h4">Kadom</NameTypography>
                </Grid>
                {/* Main form container */}
                <Grid item>
                    <VerificationForm>
                        {/* Grid container for form elements */}
                        <Grid spacing={2} direction="column">
                            {/* Title */}
                            <Grid item>
                                <TitleTypography variant="h6" color="primary">
                                    Verification
                                </TitleTypography>
                            </Grid>
                            {/* Message */}
                            <Grid item>
                                <MessageTypography variant="h6" color="primary">
                                    Enter your 4 digits code that you received on your email.
                                </MessageTypography>
                            </Grid>
                            {/* Code input fields */}
                            <CodeInput spacing={2} direction="row">
                                <Grid item xs={3}>
                                    <FormField
                                        fullWidth
                                        inputProps={{ maxLength: 1 }}
                                        style={isRed ? { border: '2px solid #F2451C', borderRadius: '10px' } : {}}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <FormField
                                        fullWidth
                                        inputProps={{ maxLength: 1 }}
                                        style={isRed ? { border: '2px solid #F2451C', borderRadius: '10px' } : {}}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <FormField
                                        fullWidth
                                        inputProps={{ maxLength: 1 }}
                                        style={isRed ? { border: '2px solid #F2451C', borderRadius: '10px' } : {}}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <FormField
                                        fullWidth
                                        inputProps={{ maxLength: 1 }}
                                        style={isRed ? { border: '2px solid #F2451C', borderRadius: '5px' } : {}}
                                    />
                                </Grid>
                            </CodeInput>
                            <Grid item>
                                <CounterTypography
                                    variant="h6"
                                    color="primary"
                                    style={isRed ? { backgroundColor: '#F2451C' } : { backgroundColor: '#1FBBC2', color: '#FFFFFF' }}
                                >
                                    Counter: 30 sec
                                </CounterTypography>
                            </Grid>
                            {/* "CONTINUE" button */}
                            <Grid item>
                                <RoundedButton onClick={handleClick} variant="contained" color="primary" fullWidth>
                                    CONTINUE
                                </RoundedButton>
                            </Grid>
                            {/* "Resend" link */}
                            <Grid item>
                                <ResendLink to="/ForgetPassword">If you didn’t receive a code! Resend</ResendLink>
                            </Grid>
                        </Grid>
                    </VerificationForm>
                </Grid>
            </Grid>
        </VerificationContainer>
    );
};

export default Verification;
