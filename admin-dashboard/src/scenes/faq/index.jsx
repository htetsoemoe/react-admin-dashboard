import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from '../../components/Header'
import { tokens } from '../../theme'

const index = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ex, voluptatibus praesentium quibusdam cupiditate rem eaque minus,
            nesciunt maxime odit at, facilis ab officia velit ea quasi voluptates
            suscipit animi. Molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            License
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ex, voluptatibus praesentium quibusdam cupiditate rem eaque minus,
            nesciunt maxime odit at, facilis ab officia velit ea quasi voluptates
            suscipit animi. Molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Pricing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ex, voluptatibus praesentium quibusdam cupiditate rem eaque minus,
            nesciunt maxime odit at, facilis ab officia velit ea quasi voluptates
            suscipit animi. Molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Community
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ex, voluptatibus praesentium quibusdam cupiditate rem eaque minus,
            nesciunt maxime odit at, facilis ab officia velit ea quasi voluptates
            suscipit animi. Molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Documentation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ex, voluptatibus praesentium quibusdam cupiditate rem eaque minus,
            nesciunt maxime odit at, facilis ab officia velit ea quasi voluptates
            suscipit animi. Molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default index
