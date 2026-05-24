package com.myassist

import okhttp3.Cookie
import okhttp3.CookieJar
import okhttp3.HttpUrl
import com.facebook.react.modules.network.CookieJarContainer

class InMemoryCookieJar : CookieJarContainer {
    private var delegate: CookieJar = CookieJar.NO_COOKIES

    override fun saveFromResponse(url: HttpUrl, cookies: List<Cookie>) {
        delegate.saveFromResponse(url, cookies)
    }

    override fun loadForRequest(url: HttpUrl): List<Cookie> {
        return delegate.loadForRequest(url)
    }

    override fun setCookieJar(cookieJar: CookieJar) {
        delegate = cookieJar
    }

    override fun removeCookieJar() {
        delegate = CookieJar.NO_COOKIES
    }
}
