import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getUserAuthData } from 'entities/User'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack className={classNames('', {}, [className])} justify='between' max>
            <Text title={t('Профиль')}/>
            {canEdit && (
                <>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid={'EditableProfileCardHeader.EditButton'}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap='8'>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelButton'}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSaveEdit}
                                    data-testid={'EditableProfileCardHeader.SaveButton'}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                </>
            )}
        </HStack>
    )
})
