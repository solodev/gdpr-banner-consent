# gdpr-banner-consent

  		  
## Tutorial		  
For detailed instruction's, view Solodev's [GDPR and Informed Consent Cookies Bar](https://www.solodev.com/blog/web-design/gdpr-and-informed-consent-cookies-bar.stml) article.
 
## Demo
  		  
Try out a working example on [JSFiddle](https://jsfiddle.net/solodev/4v0dshbg/).

## HTML

The tutorial contains the following basic HTML markup.

```
<div class="privacy-banner" style="border-top: 2px solid #ff910e; display: none;">
  <div>
    <p>
      We use cookies to provide and improve our services. By using our site, you consent to cookies.
      <a class="banner-accept" href="#" style="background: #ff910e">Accept</a>
      <a class="banner-learn" href="/terms/privacy-policy.stml">Learn more</a>
    </p>
  </div>
</div>
```

## Solodev Shortcode
```
[privacy_banner consent="true" color="#ff910e" url="/terms/privacy-policy.stml"]
We use cookies to provide and improve our services. By using our site, you consent to cookies.
[/privacy_banner]
```

## CSS

All required CSS is contained with gdpr-banner-consent.css

## JavaScript

All required JS is contained with gdpr-banner-consent.js

## External Resources

This tutorial includes the following third party resources.

```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

```

