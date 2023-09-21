import React, { FC, AnchorHTMLAttributes } from 'react';

import * as S from './styled';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    style?: React.CSSProperties,
    children?: React.ReactNode,
}

const Link: FC<LinkProps> = ({style, children, ...rest}) => {
    return (
        <S.Link style={style} {...rest}>{children}</S.Link>
    );
}

export default Link;
