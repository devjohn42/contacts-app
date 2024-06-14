import { Container, Input } from './styles';
import { ViewProps } from 'react-native';

export default function Researcher({ style, children }: ViewProps) {
  return (
    <Container>
      <Input style={[style]}>{children}</Input>
    </Container>
  );
}
