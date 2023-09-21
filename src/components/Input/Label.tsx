import React, {FC, LabelHTMLAttributes} from 'react';

import * as S from './Label.styled'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
    children?: React.ReactNode,
}

const Label: FC<LabelProps> = ({children, ...rest}) => {
    return (
        <S.Label {...rest}>{children}</S.Label>
    );
}

export default Label;
