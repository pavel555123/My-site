import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import CopyIcon from '@/shared/assets/icons/copy.svg'
import CopyIconNew from '@/shared/assets/icons/copyNew.svg'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '../Icon'
import { Button, ButtonTheme } from '../../deprecated/Button'
import cls from './Code.module.scss'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
                    <Icon
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                        onClick={onCopy}
                        clickable
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button className={cls.copyBtn} onClick={onCopy} theme={ButtonTheme.CLEAR}>
                        <CopyIcon className={cls.copyIcon}/>
                    </Button>
                    <code>
                        {text}
                    </code>
                </pre>
            }
        />
    )
})
