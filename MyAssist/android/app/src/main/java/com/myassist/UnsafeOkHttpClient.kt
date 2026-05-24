package com.myassist

import okhttp3.OkHttpClient
import java.security.SecureRandom
import java.security.cert.X509Certificate
import javax.net.ssl.SSLContext
import javax.net.ssl.TrustManager
import javax.net.ssl.X509TrustManager
import java.util.concurrent.TimeUnit
import com.facebook.react.modules.network.OkHttpClientProvider
import com.myassist.InMemoryCookieJar
import com.facebook.react.modules.network.CookieJarContainer

class UnsafeOkHttpClient {
    companion object {
        @JvmStatic
        fun getUnsafeOkHttpClient(): OkHttpClient {
            try {
                val trustAllCerts = arrayOf<TrustManager>(
                    object : X509TrustManager {
                        override fun checkClientTrusted(chain: Array<out X509Certificate>?, authType: String?) {}
                        override fun checkServerTrusted(chain: Array<out X509Certificate>?, authType: String?) {}
                        override fun getAcceptedIssuers(): Array<X509Certificate> = arrayOf()
                    }
                )

                val sslContext = SSLContext.getInstance("SSL")
                sslContext.init(null, trustAllCerts, SecureRandom())


                val builder = OkHttpClient.Builder()
                    .connectTimeout(30, TimeUnit.SECONDS)
                    .readTimeout(30, TimeUnit.SECONDS)
                    .writeTimeout(30, TimeUnit.SECONDS)
                    .sslSocketFactory(sslContext.socketFactory, trustAllCerts[0] as X509TrustManager)
                    .hostnameVerifier { _, _ -> true }
                    .cookieJar(InMemoryCookieJar())

                // Option A: if available in your RN version
                // builder.cookieJar(OkHttpClientProvider.getCookieJar())

                // Option B: if not available, just skip cookieJar
                return builder.build()
            } catch (e: Exception) {
                throw RuntimeException(e)
            }
        }
    }
}
