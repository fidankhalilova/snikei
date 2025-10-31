import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

interface MuiAccordionProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const MuiAccordion = ({ header, children }: MuiAccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary>{header}</AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
