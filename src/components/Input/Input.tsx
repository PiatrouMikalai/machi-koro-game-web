import React, { FC, ChangeEvent, InputHTMLAttributes } from 'react';

import * as S from './Input.styled'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>{
    style?: React.CSSProperties,
    onChange?: (value: string) => void,
}
const Input: FC<InputProps> = ({style, onChange, ...rest}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        onChange?.(value);
    };

    return (
        <S.Input style={style} onChange={handleChange} {...rest} />
    );
}

export default Input;