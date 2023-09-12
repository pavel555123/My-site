import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import i18n from '@/shared/config/i18n/i18n'
import {
    DynamicModuleLoader,
    type ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)
    const forceUpdate = useForceUpdate()

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
            forceUpdate()
        }
    }, [dispatch, forceUpdate, onSuccess, password, username])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <VStack className={classNames(cls.LoginForm, {}, [className])} gap='16'>
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text
                                text={i18n.t('Неверный логин или пароль')}
                                variant='error'
                            />
                        )}
                        <Input
                            type="text"
                            className={cls.input}
                            placeholder={t('Имя')}
                            value={username}
                            onChange={onChangeUsername}
                        />
                        <Input
                            type="text"
                            className={cls.input}
                            placeholder={t('Пароль')}
                            value={password}
                            onChange={onChangePassword}
                        />
                        <Button
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && (
                            <TextDeprecated
                                text={i18n.t('Неверный логин или пароль')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('Имя')}
                            value={username}
                            onChange={onChangeUsername}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('Пароль')}
                            value={password}
                            onChange={onChangePassword}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    )
})

export default LoginForm
