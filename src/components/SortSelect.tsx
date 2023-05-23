import React, {useEffect, useState} from "react"
import {Box, FormControl, InputAdornment, InputLabel, List, Select, SelectChangeEvent, TextField} from "@mui/material";
import {motion} from "framer-motion"

const RegionSelect: React.FC = () => {
    const [age, setAge] = React.useState<string | number>('');

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        setAge(event.target.value);
    };



    return (  <FormControl sx={{  minWidth: 250 }}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Filter by Region"
            onChange={handleChange}
        >
            <motion.div className="p-3 cursor-pointer" whileHover={{x:10}} initial={{opacity:0,y:10}} animate={{opacity:1,y:0,transition:{delay:1 * 0.02}}}>All</motion.div>
            <motion.div className="p-3 cursor-pointer" whileHover={{x:10}} initial={{opacity:0,y:10}} animate={{opacity:1,y:0,transition:{delay:1 * 0.04}}}>Population</motion.div>
            <motion.div className="p-3 cursor-pointer" whileHover={{x:10}} initial={{opacity:0,y:10}} animate={{opacity:1,y:0,transition:{delay:2 * 0.06}}}>Country Name</motion.div>
    </Select></FormControl>)
}


export default RegionSelect