import { type DropdownDirection } from '../../../../types/ui'
import cls from './popup.module.scss'

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom right': cls.optionsBottomRight,
    'bottom left': cls.optionsBottomLeft,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft
}
