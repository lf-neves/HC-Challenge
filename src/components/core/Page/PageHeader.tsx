import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const PageHeader = ({ children }: { children: ReactNode }): JSX.Element => (
  <Flex>{children}</Flex>
);
