import { NumberInput, Slider, Container, TextInput, Button, Box, Code, Group } from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/form';


// export function Demo() {
//   const [value, setValue] = useState(50);
//   const [endValue, setEndValue] = useState(50);


//   return (
//     <Container size={800}>
//       <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
//       <NumberInput
//         onChange value={value}
//         onChangeEnd={endValue}
//         placeholder="Number of Instruments"
//         label="Number of Instruments"
//         withAsterisk
//       />
//     </Container>
//   );
// }

export function Form() {
  const [submittedValues, setSubmittedValues] = useState('');
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  const form = useForm({
    initialValues: {
      NumberOfInstruments: '',
      TypeOfInstruments: '',
      RoboticArms: '',
      TypeRoboticArms: '',
    },

    transformValues: (values) => ({
      Summary: `${values.TypeOfInstruments}`,
      NumberOfInstruments: `${values.NumberOfInstruments}`,
      RoboticArms: `${values.RoboticArms}`,
      TypeRoboticArms: `${values.TypeRoboticArms}`,
    }),
  });

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
        <NumberInput
          onChange value= {value}
          onChangeEnd={endValue} 
          placeholder="Number of Instruments"
          label="Number of Instruments"
          {...form.getInputProps('NumberOfInstruments')}
          withAsterisk
        />
        <TextInput
          label="Type Of Instruments"
          placeholder="Type Of Instruments"
          {...form.getInputProps('TypeOfInstruments')}
        />
        <TextInput
          type="number"
          label="Robotic Arms"
          placeholder="Number of Robotic Arms"
          mt="md"
          {...form.getInputProps('RoboticArms')}
        />
        <TextInput
          label="Type Of Robotic Arms"
          placeholder="Type Of Robotic Arms"
          mt="md"
          {...form.getInputProps('TypeRoboticArms')}
        />
        <Group position="center">
        <Button variant="outline" type="submit" mt="md" mb="md">
          Submit
        </Button>
        <Button variant="outline" mt="md" mb="md" onClick={() => form.reset()}>
          Reset to initial values
        </Button>
      </Group>
      </form><br />
      <h3>Summary of Number of Instruments</h3><br/>
      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}


