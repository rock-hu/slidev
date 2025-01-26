---
layout: 2x1-grid 
title: mobile-push-notifications  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# mobile-push-notifications   

::left::
**Android** 
- Firebase Project
- Configure Android Project
- Implement the FirebaseMessagingService
- Obtain the FCM Registration Token
- Send Push Notifications

AndroidManifest.xml 
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="...">
    <application android:allowBackup="true"
        android:icon="@mipmap/ic_launcher" android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round" android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <service
            android:name=".MessagingService"
            android:exported="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

```java
public class MessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage message) {
        ...
    }

    @Override
    public void onNewToken(String token) {
        ...
    }
}

```

::right::
**iOS** 
