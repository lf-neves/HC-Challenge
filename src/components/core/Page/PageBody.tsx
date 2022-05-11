import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageBody = ({ children }: { children: ReactNode }): JSX.Element => (
    <Box>
        {children}
    </Box>
)
