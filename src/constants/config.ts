import BackButton from 'uikit/Navigator/BackButton'

export const screenOptions: any = (theme, navigator) => ({
  headerShown: true,
  headerTransparent: false,
  cardShadowEnabled: true,
  cardStyle: {
    backgroundColor: theme.colors.white,
  },
  headerStyle: {
    height: 80,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: theme.colors.primary,
  headerTitleAlign: 'center',
  headerLeft: BackButton,
})
