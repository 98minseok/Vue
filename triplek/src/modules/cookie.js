export function setCookie(key, value, days) {
    const date = new Date();
    date.setHours(24 * days - date.getTimezoneOffset()/60,0,0,0)
    const expires = date.toUTCString();
    document.cookie = `${key}=${value}; expires=${expires}; path=/`;
}

export function getCookie(key) {
    const value = document.cookie
    .split(';')
    .find((i) => i.trim().startsWith(`${key}=`))
    if(!!value){
        return value.trim().substring(key.length+1)
    }
    return null
}