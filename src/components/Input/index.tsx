import React, { useRef, useState } from 'react';
import Icon from '../Icon';
import { useSpring, config } from 'react-spring';
import * as Styles from './styles';

const Input: React.FC = () => {
  const [toggle, set] = useState(false);
  const inputRef = useRef<any>();
  const [props] = useSpring(() => {
    return {
      to: { bottom: '0px', fontSize: '1rem' },
      from: { bottom: '20px', fontSize: '0.8rem' },
      reset: true,
      config: { duration: 800 },
      reverse: true,
    };
  });

  const [inputProps] = useSpring(() => {
    return {
      to: { opacity: 1 },
      from: { opacity: 0 },
      config: { duration: 800 },

      delay: 200,
    };
  });

  return (
    <Styles.Container
      onClick={() => {
        set(true);
        inputRef && inputRef?.current?.focus();
      }}
    >
      <Styles.Icon>
        <Icon name="email" />
      </Styles.Icon>
      <Styles.Label style={toggle ? props : undefined}>Email</Styles.Label>
      <Styles.Input
        ref={inputRef}
        placeholder="amo a rafa"
        style={toggle ? inputProps : undefined}
      />
    </Styles.Container>
  );
};

export default Input;
