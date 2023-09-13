import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { ToggleFeatures } from '@/shared/lib/features'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames(cls.PageError, {}, [className])}>
                    <p>{t('Произошла непредвиденная ошибка')}</p>
                    <Button onClick={reloadPage}>
                        {t('Обновить страницу')}
                    </Button>
                </div>
            }
            off={
                <div className={classNames(cls.PageError, {}, [className])}>
                    <p>{t('Произошла непредвиденная ошибка')}</p>
                    <ButtonDeprecated onClick={reloadPage}>
                        {t('Обновить страницу')}
                    </ButtonDeprecated>
                </div>
            }
        />
    )
}
