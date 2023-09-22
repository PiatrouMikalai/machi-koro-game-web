import React, { FC, InputHTMLAttributes } from 'react';

import * as S from './styled';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    style?: React.CSSProperties,
}

const Checkbox: FC<CheckboxProps> = ({style, ...rest}) => {
    return (
        <S.Checkbox style={style} {...rest} />
    );
}

export default Checkbox;
