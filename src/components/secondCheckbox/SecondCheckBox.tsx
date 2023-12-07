import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';

const SecondCheckBox = () => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([e.target.checked, e.target.checked, e.target.checked]);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([e.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], e.target.checked, checked[2]]);
  };

  const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], e.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label='graphic_design'
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label='product_design'
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label='web_design"'
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
    </Box>
  );

  return (
    <div>
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormControlLabel
              label='design'
              control={
                <Checkbox
                  checked={checked[0] && checked[1] && checked[2]}
                  indeterminate={
                    checked[0] !== checked[1] ||
                    checked[1] !== checked[2] ||
                    checked[2] !== checked[0]
                  }
                  onChange={handleChange1}
                />
              }
            />
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default SecondCheckBox;
