import { Image, ImageProps } from 'react-native';
import { AvatarContainer, AvatarDefault, AvatarLetter } from './styles';

const variants = {
  size: {
    medium: {
      width: 55,
      height: 55,
      borderRadius: 6,
    },
    large: {
      width: 100,
      height: 100,
      borderRadius: 12,
    },
  },
  text: {
    medium: {
      fontSize: 24,
    },
    large: {
      fontSize: 32,
    },
  },
};

interface AvatarProps {
  image?: ImageProps | null;
  name: string;
  variant?: 'medium' | 'large';
}

export default function Avatar({ image, name, variant = 'medium' }: AvatarProps) {
  return (
    <AvatarContainer>
      {image ? (
        <Image source={image} style={variants.size[variant]} />
      ) : (
        <AvatarDefault style={variants.size[variant]}>
          <AvatarLetter style={variants.text[variant]}>{name[0].toUpperCase()}</AvatarLetter>
        </AvatarDefault>
      )}
    </AvatarContainer>
  );
}
