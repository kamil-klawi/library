import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuListProps } from '../types/menuListProps.ts';

export const MenuList: FC<MenuListProps> = ({
    arrayList,
    classNameList,
    classNameItem,
    classNameLink,
}) => {
    return (
        <>
            <ul className={classNameList}>
                {arrayList.map((item, index) => (
                    <li key={index} className={classNameItem}>
                        <Link className={classNameLink} to={item.uri}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
