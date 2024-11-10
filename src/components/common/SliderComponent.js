import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography, TextField } from '@mui/material';

const SliderComponent = (props) => {
    const [value, setValue] = useState(props.defaultValue || 0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value;

        if (!isNaN(newValue) && newValue >= props.min && newValue <= props.max) {
            setValue(Number(newValue));
        }
    };

    const getPrefix = () => {
        if (props.title === "Interest Rate") {
          return '%';
        }
        return '$';
      };

    return (
        <>
            <Stack gap={1}>
                <Typography variant='subtitle2'>{props.title}</Typography>
                <Stack direction="row" spacing={2}>
                    <Typography variant='h5' sx={{ flex: 1 }}>
                        {getPrefix()}{value}
                    </Typography>
                    <TextField
                        label="Enter Value"
                        variant="outlined"
                        value={value}
                        onChange={handleInputChange}
                        type="number"
                        sx={{ flex: 1 }}
                    />
                </Stack>
            </Stack>

            <Slider
                value={value}
                min={props.min}
                max={props.max}
                step={props.step}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                marks
                aria-label="Home Value"
            />
        </>
    )
}

export default SliderComponent