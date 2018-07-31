&lt;listing-item&gt;
====

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/bundles/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/listing-item@latest/dist/listing-item.min.js"></script>
```

Usage
----

```
<listing-item></listing-item>

<listing-item ad-id="42" ad-params="Pickle" category="Pickle" commune="Pickle" currency="Pickle" date="Pickle" image="Pickle" is-pro="Pickle" price="Pickle" region="Pickle" sub-category="Pickle" title="Pickle" url="Pickle"></listing-item>

<listing-item>Slot content</listing-item>
```



License
----

ListingItem is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
