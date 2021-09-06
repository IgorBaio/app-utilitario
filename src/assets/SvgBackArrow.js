import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none"  {...props}>
      <Path d="M15.6667 8.99992C15.6667 12.6749 12.675 15.6666 8.99999 15.6666C5.32499 15.6666 2.33332 12.6749 2.33332 8.99992C2.33332 5.32492 5.32499 2.33325 8.99999 2.33325C12.675 2.33325 15.6667 5.32492 15.6667 8.99992ZM17.3333 8.99992C17.3333 4.39992 13.6 0.666584 8.99999 0.666584C4.39999 0.666584 0.666657 4.39992 0.666657 8.99992C0.666657 13.5999 4.39999 17.3333 8.99999 17.3333C13.6 17.3333 17.3333 13.5999 17.3333 8.99992ZM8.99999 9.83325L12.3333 9.83325L12.3333 8.16659L8.99999 8.16659L8.99999 5.66659L5.66666 8.99992L8.99999 12.3333L8.99999 9.83325Z" 
      fill={props.color ? props.color : '#FFF'}/>
    </Svg>
  );
}

const SvgBackArrow = React.memo(SvgComponent);
export default SvgBackArrow;
