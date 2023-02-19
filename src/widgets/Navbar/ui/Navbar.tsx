import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavBarProps {
    className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>/</div>
        </div>
    )
}
