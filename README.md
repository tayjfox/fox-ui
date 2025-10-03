# FoxUI (A UI-Kitten Fork) [![npm][badge:license]]()


<img src="apps/meow-demo/src/assets/images/splash-logo.png" alt="foxUI Logo" width="200"/>

#### Developed by:

Me! @tayjfox under
<img src="https://mydinosaurlife.com/img/logo-vedla.svg" alt="foxUI Logo" width="120"/>


### Work in Progress · Not Stable

FoxUI is still in **early development**. I don't recommend using it in any project just yet.
Docs and examples will roll out as things settle. So… stay tuned!

---

## Beyond Eva Design

UI-Kitten was tightly coupled with the Eva Design System. While that gave us a neat way to create custom themes, it wasn't exactly friendly when you wanted to bring in third-party components. (Yes, custom mapping was a thing—but honestly, who had the time?)

FoxUI takes a modern approach. At its core, Tailwind gives you powerful, familiar theming options while keeping components flexible enough to play nice with whatever styling method you prefer—styled components, utility classes, or even an old-school stylesheet if that's your vibe.

That flexibility also lets FoxUI step outside React Native. You can use it with other React frameworks like Next.js or Vite too (though fair warning: not every component is available there… yet).

FoxUI also introduces a modular approach. Pull in the full package, or cherry-pick just the components you need to keep your bundle light.

And while the foundation would be (almost) completely rewritten, the goal is to make migration painless. With ```foxui-cli```, you can even convert your existing Eva themes into Tailwind-compatible ones*.

*Some manual tweaks may still be needed.

## Compatibility & Roadmap

The first release will ship with all the same components as UI-Kitten, fully rewritten for modern React Native.

However, the RN ecosystem has moved a lot since UI-Kitten last saw love. Future FoxUI releases will deprecate some legacy components while introducing fresh ones. (Version 1 will already sneak in a few new goodies.)

I'll support all "UI-Kitten era" components until June 2027. After that, they'll still work, but I won't patch or maintain them. You're totally welcome to fork and fix stuff though. I'll happily merge contributions if they keep things running.

### Why bother keeping UI-Kitten alive?

Because… why not?

But for real—when I first picked up React Native, UI-Kitten was the library I went with. At the time, a lot of the other options were either outdated or basically abandoned. UI-Kitten stuck around, and I got comfortable with it.

Fast forward a bit: I was working on an app that used UI-Kitten, but the frontend was built in Next.js with Tailwind. To keep things consistent, I hacked UI-Kitten to play nice with Tailwind and a Tailwind theme.

At some point I realized… I was already doing most of the heavy lifting. So why not clean it up, polish it, and put it out into the world as something new?



---
### This section comes from the original UI-Kitten docs:

UI-Kitten is a React Native UI Library that allows you creating stunning multi-brand cross-platform mobile applications.
The library is based on Eva Design System which brings consistency and scalability in the design and development process.
It contains a set of general purpose UI components styled in a similar way.
And the most awesome thing: the themes can be changed in the runtime, with no need to reload the application.

100% Free and Open Source!

## What's included

- **Right now?** not much.

## Quick Start

Soon™

## How can I support the developers?
- Send coffee

## License
[MIT](LICENSE.txt) license.

## From Developers
Forked from UI-Kitten :heart: by [Akveo team][link:akveo-homepage]. Follow them on [Twitter][link:akveo-twitter] to get the latest news first!

Contact me with any questions at code@vedla.ca

[badge:license]: https://img.shields.io/npm/l/react-native-ui-kitten.svg
[badge:github-actions]: https://github.com/akveo/react-native-ui-kitten/workflows/Build/badge.svg
[badge:coveralls]: https://coveralls.io/repos/github/akveo/react-native-ui-kitten/badge.svg?branch=master

[link:eva]: https://eva.design
[link:github-actions]: https://github.com/akveo/react-native-ui-kitten/actions
[link:coveralls]: https://coveralls.io/github/akveo/react-native-ui-kitten?branch=master
[link:doc-homepage]: https://akveo.github.io/react-native-ui-kitten
[link:doc-where-start]: https://akveo.github.io/react-native-ui-kitten/docs/getting-started/where-to-start
[link:kitten-tricks]: https://github.com/akveo/kittenTricks
[link:eva-icons]: https://github.com/akveo/eva-icons
[link:akveo-homepage]: https://www.akveo.com
[link:akveo-medium]: https://medium.com/akveo-engineering
[link:akveo-twitter]: https://twitter.com/akveo
[link:akveo-facebook]: https://www.facebook.com/akveo
[link:ui-kitten-bundles]: https://store.akveo.com/collections/mobile-bundles
[link:ui-kitten-bundle-java]: https://store.akveo.com/products/java-mobile-starter-bundle
[link:ui-kitten-bundle-dotnet-core]: https://store.akveo.com/products/net-core-mobile-starter-bundle