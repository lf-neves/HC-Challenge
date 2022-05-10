import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Page = ({ children, ...props }: { children: ReactNode }): JSX.Element => (
    <Box {...props}>
        {children}
    </Box>
)
