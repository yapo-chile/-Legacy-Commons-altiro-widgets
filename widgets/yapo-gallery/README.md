&lt;yapo-gallery&gt;
====

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/yapo-gallery@latest/dist/yapo-gallery.min.js"></script>
```

Usage
----

```
<yapo-gallery></yapo-gallery>

<yapo-gallery></yapo-gallery>

<yapo-gallery>Slot content</yapo-gallery>
```

```
document.querySelector('<yapo-gallery>').subcategory = String;

```

License
----

YapoGallery is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
