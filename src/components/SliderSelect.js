import React, { useState } from 'react';
import SliderComponent from './common/SliderComponent';
import { Typography, Box } from '@mui/material';

const SliderSelect = () => {
    const [homeValue, setHomeValue] = useState(500000);
    const [downPayment, setDownPayment] = useState(100000);
    const loanAmount = homeValue - downPayment;

    const handleHomeValueChange = (event, value) => {
        setHomeValue(value);
    };

    const handleDownPaymentChange = (event, value) => {
        setDownPayment(value);
    };

    return (
        <>
            <SliderComponent
                min={0}
                max={5000000}
                defaultValue={homeValue}
                step={1000}
                title="Home Value"
                value={homeValue}
                onChange={handleHomeValueChange}
            />

            <SliderComponent
                min={0}
                max={5000000}
                defaultValue={downPayment}
                step={1000}
                title="Down Payment"
                value={downPayment}
                onChange={handleDownPaymentChange}
            />

            <SliderComponent
                min={0}
                max={10}
                step={0.01}
                defaultValue={6}
                title="Interest Rate"
                onChange={(e, value) => console.log(value)}
            />

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Typography variant="h6">Total Loan Amount</Typography>
                <Typography variant="h5">${loanAmount.toLocaleString()}</Typography>
            </Box>
        </>
    );
};

export default SliderSelect;
