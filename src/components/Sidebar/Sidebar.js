import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  
    const types = props.types

    console.log("gg", types)

  const classes = useStyles();

  const handleChange = (event) => {};

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        {types.map ((type) => {return <FormGroup>
          
          <FormControlLabel
            control={
              <Checkbox checked="false" onChange={handleChange} name={type.name} />
            }
            label={type.name}
          />
         
        </FormGroup>
        })
        }
      </FormControl>
    </div>
  );
}
