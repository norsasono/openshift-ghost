# OpenShift Ghost (0.7.8)

[`OpenShift`](https://www.openshift.com/)-prepared [`Ghost`](https://ghost.org/) repo. Ghost is preinstalled with `NodeJS 0.10.35` and `NPM 1.4.28` case of these versions used in official OpenShift cartridge.

This preinstalled version also have some differences from [`Community Ghost 0.7.5 quickstart`](https://openshift.redhat.com/app/console/application_type/quickstart!240)

* As you can see `0.7.8 version` of platform provided
* Updated and rebuilded [`Intl@1.1.0`](https://www.npmjs.com/package/intl) library. Ghost at this moment provide only `en` locale, but in cause of `NodeJS 0.10.35` usage `Intl` will be installed with `NPM` with many-many locales support and take `~80 Mb` of disk space. You can multiply this value by 2 if you will use OpenShift Git repo - and `~160 Mb` for locales that you will never use (on free plan disk space quota is `1024 Mb`). Rebuilded `Intl@1.1.0` with `en` locale support takes only `~700 Kb`
* This preinstalled version prepared for `production environment`, pay your attention to it - this repo `not for platform developers`, but for `end users (bloggers)`
* As a persistent storage `Ghost use SQLite DB`, and content folder linked to `$OPENSHIFT_DATA_DIR/content`
* To reduce disk quota usage the preinstalled version cleaned with [`modclean`](https://github.com/KyleRoss/modclean) in `safe` mode

And finally, quotas comparison:

| Repo | Space usage | Total space | Inodes usage | Total inodes |
| ---- | ----------- | ----------- | ------------ | ------------ |
| Community quickstart | 446 Mb | 1024 Mb | 21244 | 80000 |
| This repository | 145 Mb | 1024 Mb | 15819 | 80000 |

To use this preinstalled Ghost platform just create a new [OpenShift](https://www.openshift.com/) application with `NodeJS 0.10` cartridge and point this repository or your fork as an application source. `Enjoy !`
