const OnBoarding = {
    store: require('./OnBoarding/store.png'),
    cart: require('./OnBoarding/cart.png'),
    family: require('./OnBoarding/family.jpeg'),
    next: require('./OnBoarding/next.png'),
    key: require('./OnBoarding/key.png'),
    search: require('./OnBoarding/search.png'),
    email: require('./OnBoarding/email.png')
}

const Menu = {
    history: require('./Menu/history.png'),
    logout: require('./Menu/logout.png'),
    notification: require('./Menu/notification.png'),
    payment: require('./Menu/payment.png'),
    star: require('./Menu/star.png'),
    setting: require('./Menu/setting.png'),
    user: require('./Menu/user.png'),
    track_order: require('./Menu/track_order.png'),
}

export default assets = {
    ...OnBoarding,
    ...Menu
}