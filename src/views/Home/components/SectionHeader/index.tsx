import React from 'react';
import { Container, ContainerTitle, Separator, Title } from './styles';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      <Separator />
    </Container>
  );
}
