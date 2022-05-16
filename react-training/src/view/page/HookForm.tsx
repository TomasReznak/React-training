import React, { useState } from 'react';
import {Controller, RegisterOptions, useForm} from 'react-hook-form';
import {Box, Button, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

interface InputList {
  id: number;
  name: string;
  label: string;
  placeholder?: string;
  validations?: RegisterOptions;
  defaultValue?: string;
}

const filterInputs: InputList[] = [
  {
    id: 1,
    label: 'Name',
    name: 'name',
    placeholder: 'Name',
  },
  {
    id: 2,
    label: 'Street',
    name: 'street',
    validations: {
      pattern: {
        value: new RegExp('^$|^\\d{1,3}[a-zA-Z]?$'),
        message: 'Street in ',
      },
    },
  },
  {
    id: 3,
    label: 'Street number',
    name: 'streetNo',
    validations: {
      pattern: {
        value: new RegExp('^$|^\\d{1,3}[a-zA-Z]?$'),
        message: 'streetNumber invalid',
      },
    },
  },
  {
    id: 4,
    label: 'City',
    name: 'city',
    validations: {
      required: 'City is required',
    },
  },
  {
    id: 5,
    label: 'Postal Code',
    name: 'postalCode',
    validations: {
      required: 'zip is mandatory',
      pattern: {
        value: new RegExp('^\\d{5}$'),
        message: 'zip invalid',
      },
    },
  },
];

function HookForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    if (data) {
      console.log(data);
    }
  };

  return (
    <div className="center">
      HOOK FORM
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box sx={{ backgroundColor: '#edeff6' }}>
            <Box display="flex" flexDirection="column">
              {filterInputs.map((input) =>
                <Box mt={1} key={input.name}>
                  <FormControl variant="standard" sx={{ width: '100%' }} key={input.id}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="subtitle2">{input.label}</Typography>
                      {input.placeholder && <Typography variant="body1">{input.placeholder}</Typography>}
                    </Box>
                    <TextField
                      sx={{ background: 'white' }}
                      key={input.id}
                      id={String(input.id)}
                      error={!!errors[input.name]}
                      helperText={errors[input.name]?.message!}
                      {...register(input.name, { ...input?.validations })}
                    />
                  </FormControl>
                </Box>
              )}
            </Box>
          </Box>
          <Box>
            <Button type={'submit'}>Submit form</Button>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default HookForm;
